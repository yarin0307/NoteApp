import { View, Text } from "react-native";
import React, { createContext } from "react";
import { useState } from "react";
export const NoteContext = createContext();

export default function NoteApp(props) {
    const DefaultInitNotesList = [
        {
            id: 1,
            category: "Personal",
            title: "Shopping List",
            body: "2 milk, 12 eggs",
            date: "15/01/2023",
        },
        {
            id: 2,
            category: "Work",
            title: "Checklist",
            body: "call my manger",
            date: "14/01/2023",
        },
        {
            id: 3,
            category: "Ideas",
            title: "Final Project",
            body: "develop new app",
            date: "13/01/2023",
        },
        {
            id: 4,
            category: "Personal",
            title: "Call",
            body: "call my grandma and my father and my mother",
            date: "12/01/2023",
        },
    ];
    const [NoteArrContext, setNoteArrContext] = useState(DefaultInitNotesList);

    const DefaultcategoriesArr = ["Personal", "Work", "Ideas"];

    const [CategoryArrContext, setCategoryArrContext] =
        useState(DefaultcategoriesArr);
    return (
        <NoteContext.Provider value={{ NoteArrContext, CategoryArrContext,setNoteArrContext }}>
            {props.children}
        </NoteContext.Provider>
    );
}