import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    labelClassName?: string,
    inputClassName?: string,
}

const inputStyles = 'eb-block eb-w-full eb-pl-2 eb-shadow-inner eb-border-0 eb-py-1.5 eb-rounded-none eb-text-gray-900 eb-ring-1 eb-ring-inset eb-ring-gray-300 placeholder:eb-text-gray-400 sm:eb-text-sm sm:eb-leading-6';

const labelStyles = "eb-block eb-text-sm eb-font-medium eb-leading-6 eb-text-gray-900";

export default function Input({
    label,
    labelClassName = '',
    inputClassName = '',
    ...props
}: InputProps) {
    console.log('yo')
    return (
        <>
            <div className={props.className}>
                {
                    label && (
                        <label
                            htmlFor={props.id}
                            className={`${labelStyles} ${labelClassName}`}>
                            {label}
                        </label>
                    )
                }
                <input
                    {...props}
                    className={`${inputStyles} ${inputClassName}`}
                />
            </div>
        </>
    )
}
