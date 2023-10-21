export type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    variant?: ButtonVariant,
    expand?: boolean,
}

const styles = {
    base: 'eb-rounded-sm eb-px-3 eb-py-2 eb-text-xs eb-shadow-sm eb-font-medium',
    focus: 'focus-visible:eb-outline focus-visible:eb-outline-2 focus-visible:eb-outline-offset-2 focus-visible:eb-outline-gray-600',
    expand: 'eb-w-full',
    variants: {
        primary: 'eb-bg-gray-900 eb-text-white hover:eb-bg-gray-700 eb-ring-gray-700',
        secondary: 'eb-bg-white eb-text-gray-900  hover:eb-bg-gray-50 eb-ring-gray-300 eb-ring-1 eb-ring-inset',
        danger: 'eb-bg-red-500 eb-text-white hover:eb-bg-red-600 ',
    },
}

export default function Button(props: ButtonProps) {
    const { variant = 'primary', className, label, expand = false } = props;
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
            {label}
        </button>
    )
}
