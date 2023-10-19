import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string,
}

const inputStyles = {
    base: 'block w-full pl-2 shadow-inner border-0 py-1.5 rounded-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6',
}

export default function Input(props: InputProps) {
    return (
        <>
            <label htmlFor={props.id} className="block text-sm font-medium leading-6 text-gray-900">
                {props.label}
            </label>
            <div className="mt-2">
                <input
                    {...props}
                    className={inputStyles.base}
                />
            </div>
        </>
    )
}
