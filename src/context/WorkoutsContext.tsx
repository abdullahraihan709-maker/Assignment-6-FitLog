'use client';

import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { Workout } from '@/components/types/workoutDataTypes';

export interface WorkoutsContextType {
    todaysPlan: Workout[];
    setTodaysPlan: Dispatch<SetStateAction<Workout[]>>;
    saveLater: Workout[];
    setSaveLater: Dispatch<SetStateAction<Workout[]>>;
}

export const WorkoutsContext = createContext<WorkoutsContextType>({
    todaysPlan: [],
    setTodaysPlan: () => {},
    saveLater: [],
    setSaveLater: () => {},
});

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
    const [todaysPlan, setTodaysPlan] = useState<Workout[]>([]);
    const [saveLater, setSaveLater] = useState<Workout[]>([]);

    const sharedData: WorkoutsContextType = {
        todaysPlan,
        setTodaysPlan,
        saveLater,
        setSaveLater,
    };

    return (
        <WorkoutsContext.Provider value={sharedData}>
            {children}
        </WorkoutsContext.Provider>
    );
};

export default WorkoutsProvider;



