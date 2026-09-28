
'use client';

import { Workout } from '@/components/types/workoutDataTypes';
import { WorkoutsContext } from '@/context/WorkoutsContext';
import { useContext, useState, useSyncExternalStore } from 'react';
import MyPlanWorkoutsCard from '@/components/shared/MyPlanWorkoutsCard';
import Link from 'next/link';

interface WorkoutsContextType {
    todaysPlan?: Workout[];
    saveLater?: Workout[];
}

const emptySubscribe = () => () => {};

const MyPlan = () => {
    const context = useContext(WorkoutsContext) as WorkoutsContextType | null;
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration");
    const [activeTab, setActiveTab] = useState<"todaysPlan" | "saved">("todaysPlan");

    // Check client mounting without triggering ESLint 'react-hooks/set-state-in-effect'
    const isMounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    );

    if (!isMounted || !context) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <p className="text-white text-xl font-semibold">Loading workouts...</p>
            </div>
        );
    }

    const { todaysPlan = [], saveLater = [] } = context;

    const sortWorkouts = (workouts: Workout[] = []): Workout[] => {
        if (!Array.isArray(workouts)) return [];
        const sorted = [...workouts];
        if (sortBy === "duration") sorted.sort((a, b) => (b.duration || 0) - (a.duration || 0));
        else if (sortBy === "calories") sorted.sort((a, b) => (b.caloriesBurned || 0) - (a.caloriesBurned || 0));
        else if (sortBy === "rating") sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        return sorted;
    };

    const currentList: Workout[] = activeTab === "todaysPlan" ? todaysPlan : saveLater;
    const sortedList = sortWorkouts(currentList);

    // Dynamic metrics calculations with explicit TypeScript types
    const totalExercises = currentList.length;
    const totalMinutes = currentList.reduce((sum: number, w: Workout) => sum + (w.duration || 0), 0);
    const totalCalories = currentList.reduce((sum: number, w: Workout) => sum + (w.caloriesBurned || 0), 0);

    return (
        <div className="container mx-auto py-10 px-4 max-w-6xl">
            
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-4xl font-extrabold text-white tracking-wide uppercase mb-2">My Plan</h1>
                <p className="text-slate-400 text-base">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {/* Metrics Summary Row */}
            <div className="bg-[#15171E] border border-slate-800/60 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row justify-between gap-6 md:gap-12">
                <div className="flex-1 border-b md:border-b-0 md:border-r border-slate-800/60 pb-4 md:pb-0">
                    <p className="text-slate-400 text-sm mb-1">Exercises</p>
                    <p className="text-4xl font-bold text-[#b8e600]">{totalExercises}</p>
                </div>
                <div className="flex-1 border-b md:border-b-0 md:border-r border-slate-800/60 pb-4 md:pb-0">
                    <p className="text-slate-400 text-sm mb-1">Minutes</p>
                    <p className="text-4xl font-bold text-white">{totalMinutes}</p>
                </div>
                <div className="flex-1">
                    <p className="text-slate-400 text-sm mb-1">Calories</p>
                    <p className="text-4xl font-bold text-white">{totalCalories}</p>
                </div>
            </div>

            {/* Tabs & Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                {/* Custom Tabs */}
                <div className="bg-[#15171E] p-1 rounded-xl flex items-center border border-slate-800/60">
                    <button
                        onClick={() => setActiveTab("todaysPlan")}
                        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                            activeTab === "todaysPlan" ? "bg-[#252830] text-white" : "text-slate-400 hover:text-slate-200"
                        }`}
                    >
                        today&apos;s Plan
                    </button>
                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                            activeTab === "saved" ? "bg-[#252830] text-white" : "text-slate-400 hover:text-slate-200"
                        }`}
                    >
                        Saved
                    </button>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-sm">Sort By</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
                        className="bg-transparent border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 outline-none focus:border-[#b8e600] transition-colors"
                    >
                        <option value="duration" className="bg-[#15171E]">Duration</option>
                        <option value="calories" className="bg-[#15171E]">Calories</option>
                        <option value="rating" className="bg-[#15171E]">Rating</option>
                    </select>
                </div>
            </div>

            {/* Workout List or Empty State */}
            <div>
                {sortedList.length > 0 ? (
                    <div className="space-y-4">
                        {sortedList.map((workout: Workout) => (
                            <MyPlanWorkoutsCard
                                key={workout.id}
                                workout={workout}
                                isSavedTab={activeTab === "saved"}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="border border-dashed border-slate-700/60 rounded-3xl p-16 flex flex-col items-center justify-center text-center bg-[#0B0D12]/50 mt-8 min-h-75">
                        <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">Nothing Here Yet</h3>
                        <p className="text-slate-400 mb-8">Browse the library and add a lift to get today moving.</p>
                        <Link href="/" className="bg-[#b8e600] hover:bg-[#a3cc00] text-black font-bold py-3 px-8 rounded-full transition-colors">
                            Go to workouts
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyPlan;




