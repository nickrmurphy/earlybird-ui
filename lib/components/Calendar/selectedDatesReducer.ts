import React from "react";

type SelectedDatesAction = "ADD" | "REMOVE";
type SelectedDatesState = string[];
type SelectedDatesPayload = { action: SelectedDatesAction, date: string };
export type SelectedDatesReducer = React.Reducer<SelectedDatesState, SelectedDatesPayload>;

export const selectedDatesReducer: SelectedDatesReducer = (state: SelectedDatesState, { action, date }: SelectedDatesPayload) => {
    const newSet = new Set(state);
    switch (action) {
        case ('ADD'):
            newSet.add(date);
            break;
        case('REMOVE'):
            newSet.delete(date);
            break;
        default:
            break;
    }
    return Array.from(newSet);
}
