export const ACTIONS = {
    ADD: "ADD",
    REMOVE: "REMOVE",
}

export const selectedEventsReducer = (state, { action, date }) => {
    const newSet = new Set(state);
    if (action === 'ADD') {
        return newSet.add(date);
    } else {
        newSet.delete(date);
        return newSet;
    }
}
