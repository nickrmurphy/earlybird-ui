import { classNames } from "../../utils/classNames";

export default function DateButton({
    index,
    totalDays,
    date,
    displayDate,
    isSelected,
    isCurrentMonth,
    isToday,
    onClick,
}) {

    return (
        <button
            key={date}
            onClick={() => onClick(isSelected, date)}
            type="button"
            className={classNames(
                'py-1.5 hover:bg-gray-100 focus:z-10',
                isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                (isSelected && !isToday) && 'font-semibold',
                isSelected && 'text-white',
                !isSelected && isCurrentMonth && !isToday && 'text-gray-900',
                !isSelected && !isCurrentMonth && !isToday && 'text-gray-400',
                isToday && 'font-extrabold',
                index === 0 && 'rounded-tl-sm',
                index === 6 && 'rounded-tr-sm',
                index === totalDays - 7 && 'rounded-bl-sm',
                index === totalDays - 1 && 'rounded-br-sm'
            )}
        >
            <time
                dateTime={date}
                className={classNames(
                    'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                    isSelected && isToday && 'bg-gray-200 shadow-lg text-gray-900 border-gray-900 border-2',
                    isSelected && !isToday && 'bg-gray-900'
                )}
            >
                {displayDate}
            </time>
        </button>
    );
}