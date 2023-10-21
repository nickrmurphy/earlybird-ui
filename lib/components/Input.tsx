import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string,
}

const inputStyles = {
    base: 'eb-block eb-w-full eb-pl-2 eb-shadow-inner eb-border-0 eb-py-1.5 eb-rounded-none eb-text-gray-900 eb-ring-1 eb-ring-inset eb-ring-gray-300 placeholder:eb-text-gray-400 sm:eb-text-sm sm:eb-leading-6',
}

export default function Input(props: InputProps) {
    return (
        <>
            <label htmlFor={props.id} className="eb-block eb-text-sm eb-font-medium eb-leading-6 eb-text-gray-900">
                {props.label}
            </label>
            <div className="eb-mt-2">
                <input
                    {...props}
                    className={inputStyles.base}
                />
            </div>
        </>
    )
}
