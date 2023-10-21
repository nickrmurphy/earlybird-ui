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
    topLeft: 'eb-rounded-tl-sm',
    topRight: 'eb-rounded-tr-sm',
    bottomLeft: 'eb-rounded-bl-sm',
    bottomRight: 'eb-rounded-br-sm',
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
                'eb-py-1.5 hover:eb-bg-gray-100 focus:eb-z-10',
                isCurrentMonth ? 'eb-bg-white' : 'eb-bg-gray-50',
                isToday && 'eb-font-semibold',
                (isSelected && !isToday) && 'eb-font-medium',
                isSelected && 'eb-text-white',
                !isSelected && isCurrentMonth && !isToday && 'eb-text-gray-900',
                !isSelected && !isCurrentMonth && !isToday && 'eb-text-gray-400',
                corner && cornerStyles[corner],
            )}
        >
            <time
                dateTime={date}
                className={classNames(
                    'eb-mx-auto eb-flex eb-h-7 eb-w-7 eb-items-center eb-justify-center eb-rounded-lg',
                    isSelected && isToday && 'eb-bg-gray-50 eb-shadow-sm eb-text-gray-900 eb-border-gray-900 eb-border-2',
                    isSelected && !isToday && 'eb-bg-gray-900'
                )}
            >
                {displayDate}
            </time>
        </button>
    );
}