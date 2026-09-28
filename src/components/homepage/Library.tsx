import WorkoutCard from "../shared/WorkoutCard";
import { Workout } from "../types/workoutDataTypes";

const getWorkoutData = async (): Promise<Workout[]> => {
    const response = await fetch("http://localhost:3000/workoutData.json", {
        cache: "no-store", // Ensure fresh data on server render
    });
    const data = await response.json();
    return data;
};

const Library = async () => {
    const workoutData = await getWorkoutData();

    return (
        <section id="library" className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-black">
            
            {/* Section Heading */}
            <div className="mb-8">
                
                <h2 className="font-extrabold text-2xl sm:text-3xl text-white tracking-wide uppercase mb-1.5">
                   The Library
                </h2>

                <p className="text-zinc-400 text-sm sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>

            </div>

            {/* Library Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {workoutData.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>

        </section>
    );
};

export default Library;


