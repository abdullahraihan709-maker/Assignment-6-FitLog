import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/components/types/workoutDataTypes";

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

    return (
        <Link 
            href={`/workouts/${id}`}
            className="group bg-[#15171E] rounded-2xl p-4 border border-slate-800/60 hover:border-slate-700 transition-colors flex flex-col justify-between"
        >
            <div>
                {/* Image Container Start */}
                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-slate-800/30">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        unoptimized
                        loading="eager"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                {/* Image Container End */}


                {/* Tags Start */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {muscleGroups.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2.5 py-0.5 rounded bg-[#b8e600] text-black text-[10px] font-black uppercase tracking-wider"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Tags Start */}


                {/* Title & Equipment Start */}
                <h3 className="font-bold uppercase text-lg text-white leading-tight line-clamp-1 mb-1">
                    {name}
                </h3>
                <p className="text-zinc-400 font-medium text-sm">
                    {equipment}
                </p>
                {/* Title & Equipment End */}

            </div>



            {/* Bottom Stats Start */}
            <div>

                <hr className="border-slate-800/60 my-4" />

                <div className="flex items-center gap-4 text-zinc-400 font-medium text-xs">

                    {/* Duration/min Start */}
                    <div className="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#b8e600]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        <span>{duration} min</span>
                    </div>
                    {/* Duration/min End */}

                    {/* CaloriesBurn/kcal Start */}
                    <div className="flex items-center gap-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#b8e600]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3.25C14.05 3.07 14.03 2.85 13.9 2.7C13.77 2.54 13.56 2.48 13.37 2.53C10.74 3.26 8.5 5.25 7.6 7.82C6.98 9.58 7.15 11.45 7.91 13.06C8.08 13.43 8.32 13.77 8.44 14.15C8.61 14.67 8.47 15.22 8.1 15.61C7.8 15.93 7.37 16.03 6.94 15.96C6.73 15.92 6.54 16.06 6.5 16.27C6.42 16.7 6.43 17.14 6.51 17.57C6.88 19.5 8.1 21.14 9.8 22.04C10.97 22.65 12.28 22.95 13.6 22.84C15.86 22.64 17.94 21.36 19.16 19.46C20.48 17.4 20.42 14.53 18.9 12.56C18.52 12.06 18.11 11.61 17.66 11.2ZM14.12 20.88C12.96 21.2 11.72 21 10.7 20.36C10.4 20.17 10.6 19.7 10.93 19.67C11.69 19.59 12.44 19.14 12.87 18.49C13.2 17.98 13.3 17.37 13.16 16.78C13.01 16.14 12.58 15.62 12.05 15.21C11.53 14.81 10.93 14.52 10.36 14.16C9.69 13.73 9.09 13.17 8.65 12.49C8.29 11.95 8.04 11.35 7.94 10.72C8.75 11.75 10.05 12.33 11.37 12.19C12.63 12.06 13.72 11.23 14.34 10.15C14.73 9.47 14.93 8.69 14.94 7.9C15.94 9.1 16.49 10.76 16.08 12.36C15.81 13.43 15.08 14.33 14.12 14.92C13.47 15.31 12.97 15.9 12.72 16.63C12.42 17.49 12.55 18.46 13.11 19.18C13.35 19.49 13.67 19.73 14.04 19.87C14.43 20.02 14.42 20.78 14.12 20.88Z" />
                            </svg>
                        <span>{caloriesBurned} kcal</span>
                    </div>
                    {/* CaloriesBurn/kcal End */}

                    {/* Rating Start */}
                    <div className="flex items-center gap-1.5 ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        <span>{rating.toFixed(1)}</span>
                    </div>
                    {/* Rating End */}


                </div>

            </div>
            {/* Bottom Stats End */}

            
        </Link>
    );
};

export default WorkoutCard;



