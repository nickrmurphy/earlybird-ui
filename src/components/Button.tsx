interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger',
    label: string,
}

const styles = {
    base: 'inline-flex items-center rounded-full px-3 py-2 text-xs shadow-sm font-semibold',
    primary: 'bg-gray-900 text-white hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 ring-gray-700',
    secondary: 'bg-white text-gray-900  hover:bg-gray-50 ring-gray-300 ring-1 ring-inset',
    danger: 'bg-red-500 text-white  hover:bg-red-600 ',
}

export default function Button(props: ButtonProps) {
    const { variant = 'primary', className, label } = props;
    return (
        <button
            {...props}
            className={`${styles.base} ${styles[variant]} ${className}`}
        >
            {label}
        </button>
    )
}
