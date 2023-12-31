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
        className="-eb-m-1.5 eb-flex eb-flex-none eb-items-center eb-justify-center eb-p-1.5 eb-text-gray-600 hover:eb-text-gray-800"
    >
        <span className="eb-sr-only">{srLabel}</span>
        {children}
    </button>
)

export default ArrowButton;
