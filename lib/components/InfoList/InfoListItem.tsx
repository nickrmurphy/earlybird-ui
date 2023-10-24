import { ReactNode } from "react"

export interface InfoListItemProps {
    label: string,
    children?: ReactNode
}

const InfoListItem = ({
    label,
    children
}: InfoListItemProps) => (
    <div className="eb-px-4 eb-py-6 sm:eb-grid sm:eb-grid-cols-3 sm:eb-gap-4 sm:eb-px-0">
        <dt className="eb-text-sm eb-font-medium eb-leading-6 eb-text-gray-900">{label}</dt>
        <dd className="eb-mt-1 eb-text-sm eb-leading-6 eb-text-gray-700 sm:eb-col-span-2 sm:eb-mt-0">
            {children}
        </dd>
    </div>
);

export default InfoListItem;
