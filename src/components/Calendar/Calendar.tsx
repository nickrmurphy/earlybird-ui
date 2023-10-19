import { useEffect, useMemo, useReducer, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { getWeeksInMonth, format, startOfMonth, startOfWeek, addDays, subMonths, addMonths, isSameMonth, isToday } from 'date-fns';
import DateButton from './DateButton';
import { daysOfWeek } from './constants';
import { selectedEventsReducer } from './selectedEventsReducer';

export default function Calendar({ onDatesChange }) {
  const [month, setMonth] = useState(Date.now());
  const [selectedDates, dispatchDates] = useReducer(selectedEventsReducer, new Set());

  useEffect(() => {
    onDatesChange(selectedDates);
  }, [selectedDates, onDatesChange]);

  const days = useMemo(() => {
    const startMonth = startOfMonth(month);
    const totalDays = getWeeksInMonth(startMonth) * 7;
    const allDates = [];
    let theDay = startOfWeek(startMonth);
    for (let i = 0; i < totalDays; i++) {
      allDates.push({
        date: format(theDay, "yyyy-MM-dd"),
        displayDate: format(theDay, "d"),
        isCurrentMonth: isSameMonth(theDay, month),
        isToday: isToday(theDay),
      });
      theDay = addDays(theDay, 1)
    }
    return allDates;
  }, [month]);

  const handleClick = (isSelected, date) => {
    const action = isSelected ? 'REMOVE' : 'ADD';
    dispatchDates({ action, date });
  }

  return (
    <div>
      <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
        <div className="flex items-center text-gray-900">
          <button
            onClick={() => setMonth(subMonths(month, 1))}
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto text-sm font-semibold">
            {format(month, "MMMM")}
          </div>
          <button
            onClick={() => setMonth(addMonths(month, 1))}
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
          {
            daysOfWeek.map((day, i) => <div key={`${day}-${i}`}>{day}</div>)
          }
        </div>
        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-sm bg-gray-200 text-sm shadow ring-1 ring-gray-200">
          {days.map((day, i) => (
            <DateButton
              key={day.date}
              index={i}
              totalDays={days.length}
              date={day.date}
              displayDate={day.displayDate}
              isCurrentMonth={day.isCurrentMonth}
              isToday={day.isToday}
              isSelected={selectedDates.has(day.date)}
              onClick={(isSelected, date) => handleClick(isSelected, date)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
