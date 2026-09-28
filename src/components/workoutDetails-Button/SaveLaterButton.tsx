
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
            Save for later
        </button>
    );
};

export default SaveLaterButton;





