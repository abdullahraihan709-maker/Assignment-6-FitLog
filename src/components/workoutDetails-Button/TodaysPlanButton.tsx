'use client';

import { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { toast } from "react-toastify";
import { Workout } from "../types/workoutDataTypes";

const TodaysPlanButton = ({ workout }: { workout: Workout }) => {
    const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext);

    const handleTodaysPlan = () => {
        const isAlreadyInPlan = todaysPlan.some((item) => item.id === workout.id);

        if (isAlreadyInPlan) {
            toast.info("It is already in your plan");
            return;
        }

        setTodaysPlan([...todaysPlan, workout]);
        toast.success(`"${workout.name}" is added to your Today's Plan`, {
                style: {
                    background: '#15171E',
                    color: '#b8e600',
                    border: '1px solid #222630',
                },
            });
    };

    return (
        <button 
            onClick={handleTodaysPlan} 
            className="btn btn-outline bg-[#b8e600] border-[#b8e600] text-black rounded-xl px-8 text-base font-semibold shadow-sm transition-all"
        >
            Add to todays plan
        </button>
    );
};

export default TodaysPlanButton;



