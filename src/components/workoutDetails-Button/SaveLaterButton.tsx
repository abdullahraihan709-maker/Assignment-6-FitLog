
'use client';


import { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { toast } from "react-toastify";
import { Workout } from "../types/workoutDataTypes";

const SaveLaterButton = ({ workout }: { workout: Workout }) => {
    const { saveLater, setSaveLater } = useContext(WorkoutsContext);

    const handleSaveLater = () => {
        const isAlreadySaved = saveLater.some((item) => item.id === workout.id);

        if (isAlreadySaved) {
            toast.info("It is already in your saved list", {
                 style: {
                    background: '#15171E',
                    color: '#ffffff',
                    border: '1px solid #222630',
                },
            });
            return;
        }

        setSaveLater([...saveLater, workout]);
        toast.success(`"${workout.name}" is saved for later`, {
             style: {
                    background: '#15171E',
                    color: '#ffffff',
                    border: '1px solid #222630',
                },
            });
    };

    return (
        <button 
            onClick={handleSaveLater} 
            className="btn btn-outline bg-black border-slate-200 text-white rounded-xl px-8 text-base font-semibold shadow-sm transition-all"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 640 640"><path fill="rgb(255, 255, 255)" d="M128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 545.1C512 570.7 483.5 585.9 462.2 571.7L320 476.8L177.8 571.7C156.5 585.9 128 570.6 128 545.1L128 128zM192 112C183.2 112 176 119.2 176 128L176 515.2L293.4 437C309.5 426.3 330.5 426.3 346.6 437L464 515.2L464 128C464 119.2 456.8 112 448 112L192 112z"/></svg>
            Save for later
        </button>
    );
};

export default SaveLaterButton;





