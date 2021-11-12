import React from 'react';

export interface Goal { 
    id: string;
    text: string;
}

export interface Course { 
    id: string;
    title: string;
    enrolled: Date;
    goals: Goal[];
    included: boolean;
}

interface CourseContext {
    courses: Course[];
    addCourse: (title: string, date: Date) => void;
    addGoal: (courseId: string, goalText: string) => void;
    deleteGoal: (courseId: string, goalId: string) => void;
    updateGoal: (courseId: string, goalId: string, newText: string) => void;
    changeCourseFilter: (courseId: string, isIncluded: boolean) => void;
}

const CoursesContext = React.createContext<CourseContext>(
    {
        courses: [], 
        addCourse: () => {},
        addGoal:  () => {},
        deleteGoal: () => {},
        updateGoal: () => {},
        changeCourseFilter: () => {}
    }
);

export default CoursesContext;