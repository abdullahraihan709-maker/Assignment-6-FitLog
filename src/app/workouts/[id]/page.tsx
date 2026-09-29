import { Workout } from "@/components/types/workoutDataTypes";
import SaveLaterButton from "@/components/workoutDetails-Button/SaveLaterButton";
import TodaysPlanButton from "@/components/workoutDetails-Button/TodaysPlanButton";
import Image from "next/image";
import Link from "next/link";
import workoutData from "../../../../public/workoutData.json"; // relative import with .json

interface TWorkoutDetailsPage {
    params: Promise<{
        id: string;
    }>;
}



const WorkoutDetailsPage = async ({ params }: TWorkoutDetailsPage) => {
    const { id } = await params;
    
    const workout = (workoutData as Workout[]).find((b: Workout) => String(b.id) === String(id));

    if (!workout) {
        return (
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
                <h2 className="text-3xl font-bold text-white">Workout Not Found</h2>
                <p className="text-zinc-500 mt-2">The workout you are looking for does not exist or has been removed.</p>
                <Link href="/" className="mt-6 btn bg-[#b8e600] text-black font-bold border-none rounded-xl px-6">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <section className="bg-black py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
 
                {/* Left Side (Image Container) */}
                <div className="lg:col-span-5 relative w-full h-100 sm:h-125 lg:h-162.5 rounded-3xl overflow-hidden bg-slate-800/30">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        priority
                        unoptimized
                        className="object-cover"
                    />
                </div>

                {/* Right Side (Content) */}
                <div className="lg:col-span-7 flex flex-col space-y-8">

                    {/* Title & Description */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">
                            {workout.name}
                        </h1>
                        <p className="text-slate-400 text-base md:text-lg mt-3 font-medium">
                            {workout.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                        {workout.muscleGroups.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3.5 py-1 rounded-full bg-[#b8e600] text-black text-xs font-black uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Metadata Table */}
                    <div className="bg-[#15171E] border border-slate-800/60 rounded-xl flex flex-col">
                        
                        {/* Equipment */}
                        <div className="flex justify-between items-center p-4 border-b border-slate-800/60">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Equipment</span>
                            <span className="font-semibold text-white text-sm">{workout.equipment}</span>
                        </div>

                        {/* Difficulty */}
                        <div className="flex justify-between items-center p-4 border-b border-slate-800/60">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Difficulty</span>
                            <span className="font-semibold text-white text-sm">{workout.difficulty}</span>
                        </div>

                        {/* Sets */}
                        <div className="flex justify-between items-center p-4 border-b border-slate-800/60">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Sets</span>
                            <span className="font-semibold text-white text-sm">{workout.sets}</span>
                        </div>

                        {/* Reps */}
                        <div className="flex justify-between items-center p-4 border-b border-slate-800/60">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Reps</span>
                            <span className="font-semibold text-white text-sm">{workout.reps}</span>
                        </div>

                        {/* Duration */}
                        <div className="flex justify-between items-center p-4 border-b border-slate-800/60">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Duration</span>
                            <span className="font-semibold text-white text-sm">{workout.duration} min</span>
                        </div>

                        {/* Calories */}
                        <div className="flex justify-between items-center p-4 border-b border-slate-800/60">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Calories</span>
                            <span className="font-semibold text-white text-sm">{workout.caloriesBurned} kcal</span>
                        </div>

                        {/* Rating */}
                        <div className="flex justify-between items-center p-4">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Rating</span>
                            <span className="font-semibold text-white text-sm">{workout.rating.toFixed(1)}</span>
                        </div>
                    </div>

                    {/* Instructions Section */}
                    <div>
                        <h3 className="text-white font-extrabold text-lg uppercase tracking-wide mb-4">
                            Instructions
                        </h3>
                        <ol className="list-decimal list-inside space-y-3 text-slate-300 text-sm md:text-base leading-relaxed">
                            {workout.instructions.map((step, index) => (
                                <li key={index} className="pl-2">
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4">
                        <TodaysPlanButton workout={workout} />
                        <SaveLaterButton workout={workout} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WorkoutDetailsPage;


