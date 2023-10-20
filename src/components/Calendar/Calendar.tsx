import { useEffect, useMemo, useReducer, useState } from 'react'
import { format, subMonths, addMonths } from 'date-fns';
import { SelectedDatesReducer, selectedDatesReducer } from './selectedDatesReducer';
import Header from './Header';
import DaysOfWeek from './DaysOfWeek';
import getDisplayDays from './utils/getDisplayDays';
import DateButton from './DateButton';
import getCorner from './utils/getCorner';

export default function Calendar({
    onDatesChange
}: {
    onDatesChange: (dates: string[]) => void,
}) {
    const [month, setMonth] = useState(new Date());
    const days = useMemo(() => getDisplayDays(month), [month]);
    const [selectedDates, dispatchDates] = useReducer<SelectedDatesReducer>(selectedDatesReducer, []);

    useEffect(() => {
        onDatesChange(selectedDates);
    }, [selectedDates, onDatesChange]);

    const handleDateSelect = (isSelected: boolean, date: string) => {
        const action = isSelected ? "REMOVE" : "ADD";
        dispatchDates({ action, date });
    }

    const changeMonth = (direction: string) => {
        let newMonth;
        if (direction === 'next') newMonth = addMonths(month, 1);
        if (direction === 'prev') newMonth = subMonths(month, 1);
        if (newMonth) setMonth(newMonth);
    }

    return (
        <div>
            <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                <Header
                    title={format(month, "MMMM")}
                    onArrowClick={changeMonth}
                />
                <DaysOfWeek />
                <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-sm bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                    {days.map((day, i) => (
                        <DateButton
                            key={day.date}
                            corner={getCorner(i, days.length)}
                            date={day.date}
                            displayDate={day.displayDate}
                            isCurrentMonth={day.isCurrentMonth}
                            isToday={day.isToday}
                            onClick={(isSelected, date) => handleDateSelect(isSelected, date)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
