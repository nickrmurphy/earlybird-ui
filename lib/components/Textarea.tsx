interface TextareaProps extends React.ButtonHTMLAttributes<HTMLTextAreaElement> {
    label?: string,
    rows?: number,
}

export default function Textarea({
    id,
    label,
    rows = 4,
    ...props
}: TextareaProps) {
    return (
        <div>
            {
                label && (
                    <label htmlFor={id} className="eb-block eb-text-sm eb-font-medium eb-leading-6 eb-text-gray-900">
                        {label}
                    </label>
                )
            }
            <div className="eb-mt-2">
                <textarea
                    {...props}
                    rows={rows}
                    id={id}
                    className="eb-block eb-w-full eb-rounded-none eb-border-0 eb-p-2 eb-text-gray-900 eb-shadow-sm eb-ring-1 eb-ring-inset eb-ring-gray-300 placeholder:eb-text-gray-400 sm:eb-text-sm sm:eb-leading-6"
                />
            </div>
        </div>
    )
}
