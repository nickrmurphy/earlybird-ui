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
            <div className="eb-mt-10 eb-text-center lg:eb-col-start-8 lg:eb-col-end-13 lg:eb-row-start-1 lg:eb-mt-9 xl:eb-col-start-9">
                <Header
                    title={format(month, "MMMM")}
                    onArrowClick={changeMonth}
                />
                <DaysOfWeek />
                <div className="eb-isolate eb-mt-2 eb-grid eb-grid-cols-7 eb-gap-px eb-rounded-sm eb-bg-gray-200 eb-text-sm eb-shadow eb-ring-1 eb-ring-gray-200">
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
