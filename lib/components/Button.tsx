export type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string,
    variant?: ButtonVariant,
    expand?: boolean,
}

const styles = {
    base: 'eb-rounded-sm eb-px-3 eb-py-2 eb-text-xs eb-shadow-sm eb-font-medium eb-inline-flex eb-items-center',
    focus: 'focus-visible:eb-outline focus-visible:eb-outline-2 focus-visible:eb-outline-offset-2 focus-visible:eb-outline-gray-600',
    expand: 'eb-w-full',
    variants: {
        primary: 'eb-bg-gray-900 eb-text-white hover:eb-bg-gray-700 eb-ring-gray-700 disabled:eb-bg-gray-500',
        secondary: 'eb-bg-white eb-text-gray-900  hover:eb-bg-gray-50 eb-ring-gray-300 eb-ring-1 eb-ring-inset disabled:eb-text-gray-500 disabled:eb-bg-gray-100',
        danger: 'eb-bg-red-500 eb-text-white hover:eb-bg-red-600 disabled:eb-bg-red-400',
    },
}

export default function Button({
    variant = 'primary',
    className,
    label,
    expand = false,
    children,
    ...props
}: ButtonProps) {
    console.log('latest')
    return (
        <button
            {...props}
            className={`
                ${styles.base}
                ${styles.focus}
                ${styles.variants[variant]}
                ${expand ? styles.expand : ''}
                ${className}
            `}
        >
            {
                children ? <span className="eb-sr-only">{label}</span> : label
            }
            {
                children
            }
        </button>
    )
}
