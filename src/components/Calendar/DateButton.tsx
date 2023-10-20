import { HTMLProps, useReducer } from "react";
import { classNames } from "../../utils/classNames";
import { CalendarCorner } from "./constants";

interface DateButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'onClick'> {
    corner: CalendarCorner | undefined,
    date: string,
    displayDate: string,
    isCurrentMonth: boolean,
    isToday: boolean,
    onClick: (isSelected: boolean, date: string) => void,
}

const cornerStyles = {
    topLeft: 'rounded-tl-sm',
    topRight: 'rounded-tr-sm',
    bottomLeft: 'rounded-bl-sm',
    bottomRight: 'rounded-br-sm',
}

export default function DateButton({
    corner,
    date,
    displayDate,
    isCurrentMonth,
    isToday,
    onClick,
}: DateButtonProps) {
    const [isSelected, toggleIsSelected] = useReducer((state) => !state, false);

    const handleClick = () => {
        toggleIsSelected();
        onClick(isSelected, date);
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className={classNames(
                'py-1.5 hover:bg-gray-100 focus:z-10',
                isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                isToday && 'font-semibold',
                (isSelected && !isToday) && 'font-medium',
                isSelected && 'text-white',
                !isSelected && isCurrentMonth && !isToday && 'text-gray-900',
                !isSelected && !isCurrentMonth && !isToday && 'text-gray-400',
                corner && cornerStyles[corner],
            )}
        >
            <time
                dateTime={date}
                className={classNames(
                    'mx-auto flex h-7 w-7 items-center justify-center rounded-lg',
                    isSelected && isToday && 'bg-gray-50 shadow-sm text-gray-900 border-gray-900 border-2',
                    isSelected && !isToday && 'bg-gray-900'
                )}
            >
                {displayDate}
            </time>
        </button>
    );
}