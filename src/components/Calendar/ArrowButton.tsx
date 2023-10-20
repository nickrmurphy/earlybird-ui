import { HTMLProps } from "react";

type ArrowButtonDirection = 'next' | 'prev';

interface ArrowButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'onClick'> {
    srLabel: string,
    direction: ArrowButtonDirection,
    onClick: (direction: ArrowButtonDirection) => void,
}

const ArrowButton = ({
    onClick,
    direction,
    srLabel,
    children,
    ...props
}: ArrowButtonProps) => (
    <button
        {...props}
        type="button"
        onClick={() => onClick(direction)}
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-600 hover:text-gray-800"
    >
        <span className="sr-only">{srLabel}</span>
        {children}
    </button>
)

export default ArrowButton;
