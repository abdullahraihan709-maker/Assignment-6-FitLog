'use client';

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/components/types/workoutDataTypes";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { toast } from "react-toastify";

interface MyPlanWorkoutsCardProps {
    workout: Workout;
    isSavedTab?: boolean;
}

const MyPlanWorkoutsCard = ({ workout, isSavedTab = false }: MyPlanWorkoutsCardProps) => {
    const { setTodaysPlan, setSaveLater } = useContext(WorkoutsContext);

    const {
        id,
        name,
        equipment,
        image,
        duration,
        caloriesBurned,
        rating,
    } = workout;

    // Handle "Mark as Done"
    const handleMarkAsDone = () => {
        setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
        toast.success("Workout logged - nice work.");
    };

    // Handle "X" (Remove)
    const handleRemove = () => {
        if (isSavedTab) {
            setSaveLater((prev) => prev.filter((item) => item.id !== id));
            toast.info("Removed from saved list");
        } else {
            setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
            toast.info("Removed from today's plan");
        }
    };

    return (
        <div className="bg-[#15171E] border border-slate-800/60 rounded-2xl p-4 flex flex-col md:flex-row gap-5 items-center md:justify-between hover:border-slate-700 transition-colors">
            
            {/* Left Side (Thumbnail & Workout Info) Start */}
            <div className="flex w-full md:w-auto items-center gap-5 flex-1">
                
                {/* Thumbnail Container Start */}
                <div className="bg-slate-800/50 rounded-xl p-2 shrink-0 flex items-center justify-center w-28 h-20 md:w-32 md:h-24">
                    <div className="relative w-full h-full drop-shadow-md">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            unoptimized
                            className="object-contain"
                        />
                    </div>
                </div>
                {/* Thumbnail Container End */}


                {/* Info & Stats Start */}
                <div className="flex flex-col justify-center space-y-2">
                    
                    <div>
                        <h3 className="font-bold text-lg md:text-xl text-white uppercase tracking-wide leading-tight">
                            {name}
                        </h3>
                        <p className="text-slate-400 text-sm font-medium">
                            {equipment}
                        </p>
                    </div>

                    {/* Meta Stats Row Start */}
                    <div className="flex items-center gap-4 text-xs md:text-sm font-medium">

                        <div className="flex items-center gap-1.5 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#b8e600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{duration} min</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#b8e600]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3.25C14.05 3.07 14.03 2.85 13.9 2.7C13.77 2.54 13.56 2.48 13.37 2.53C10.74 3.26 8.5 5.25 7.6 7.82C6.98 9.58 7.15 11.45 7.91 13.06C8.08 13.43 8.32 13.77 8.44 14.15C8.61 14.67 8.47 15.22 8.1 15.61C7.8 15.93 7.37 16.03 6.94 15.96C6.73 15.92 6.54 16.06 6.5 16.27C6.42 16.7 6.43 17.14 6.51 17.57C6.88 19.5 8.1 21.14 9.8 22.04C10.97 22.65 12.28 22.95 13.6 22.84C15.86 22.64 17.94 21.36 19.16 19.46C20.48 17.4 20.42 14.53 18.9 12.56C18.52 12.06 18.11 11.61 17.66 11.2ZM14.12 20.88C12.96 21.2 11.72 21 10.7 20.36C10.4 20.17 10.6 19.7 10.93 19.67C11.69 19.59 12.44 19.14 12.87 18.49C13.2 17.98 13.3 17.37 13.16 16.78C13.01 16.14 12.58 15.62 12.05 15.21C11.53 14.81 10.93 14.52 10.36 14.16C9.69 13.73 9.09 13.17 8.65 12.49C8.29 11.95 8.04 11.35 7.94 10.72C8.75 11.75 10.05 12.33 11.37 12.19C12.63 12.06 13.72 11.23 14.34 10.15C14.73 9.47 14.93 8.69 14.94 7.9C15.94 9.1 16.49 10.76 16.08 12.36C15.81 13.43 15.08 14.33 14.12 14.92C13.47 15.31 12.97 15.9 12.72 16.63C12.42 17.49 12.55 18.46 13.11 19.18C13.35 19.49 13.67 19.73 14.04 19.87C14.43 20.02 14.42 20.78 14.12 20.88Z" />
                            </svg>
                            <span>{caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span>{rating.toFixed(1)}</span>
                        </div>

                    </div>
                    {/* Meta Stats Row End */}

                </div>
                {/* Info & Stats End */}


            </div>
            {/* Left Side (Thumbnail & Workout Info) End */}





            {/* Right Side (Action Buttons) Start */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end mt-4 md:mt-0">
                
                <Link
                    href={`/workouts/${id}`}
                    className="px-5 py-2 rounded-full border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap"
                >
                    View Details
                </Link>


                {/* "Mark as Done" only in Today's Plan -> Start */}
                {!isSavedTab && (
                    <button 
                        onClick={handleMarkAsDone}
                        className="flex items-center gap-2 bg-[#b8e600] hover:bg-[#a3cc00] text-black px-4 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Mark as Done
                    </button>
                )}
                {/* "Mark as Done" only in Today's Plan -> End */}


                {/* Close/Remove "X" Button Start */}
                <button 
                    onClick={handleRemove}
                    className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-colors ml-1" 
                    aria-label="Remove workout"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {/* Close/Remove "X" Button End */}

            </div>
            {/* Right Side (Action Buttons) End */}
            
        </div>
    );
};

export default MyPlanWorkoutsCard;





