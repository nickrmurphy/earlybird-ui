import { getWeeksInMonth, format, startOfMonth, startOfWeek, addDays, isSameMonth, isToday } from 'date-fns';

export type DisplayDate = {
    date: string,
    displayDate: string,
    isCurrentMonth: boolean,
    isToday: boolean,
}

const getDisplayDays: (month: Date) => DisplayDate[] = (month) => {
    const startMonth = startOfMonth(month);
    const totalDays = getWeeksInMonth(startMonth) * 7;
    const allDates = [];
    let day = startOfWeek(startMonth);
    
    for (let i = 0; i < totalDays; i++) {
        allDates.push({
            date: format(day, "yyyy-MM-dd"),
            displayDate: format(day, "d"),
            isCurrentMonth: isSameMonth(day, month),
            isToday: isToday(day),
        });
        day = addDays(day, 1)
    }
    return allDates;
}

export default getDisplayDays;
