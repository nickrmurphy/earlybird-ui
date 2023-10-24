import { Right } from "@icon-park/react"
import { ReactNode } from "react"


export interface ListGroupProps {
    header: string
    children?: ReactNode,
}

export const ListGroup = ({
    header,
    children,
}: ListGroupProps) => (
    <div className="eb-relative">
        <div className="eb-sticky eb-top-0 eb-z-10 eb-border-y eb-border-b-gray-200 eb-border-t-gray-100 eb-bg-gray-50 eb-px-3 eb-py-1.5 eb-text-sm eb-font-semibold eb-leading-6 eb-text-gray-900">
            <h3>{header}</h3>
        </div>
        <ul role="list" className="eb-divide-y eb-divide-gray-100 eb-px-2">
            {children}
        </ul>
    </div>
)

export interface ListGroupItemProps {
    id: number | string,
    onClick?: (id: number | string) => void,
    label: string,
}

export const ListGroupItem = ({
    id,
    onClick,
    label,
}: ListGroupItemProps) => (
    <li className="eb-px-4 eb-py-4 sm:eb-px-0 eb-font-medium">
        <div
            role="button"
            onClick={() => onClick && onClick(id)}
            className={`eb-flex eb-items-center ${onClick ? "hover:eb-cursor-pointer" : ""}`}
        >
            <p>{label}</p>
            {
                onClick && (
                    <div className="eb-ms-auto">
                        <Right />
                    </div>
                )
            }
        </div>
    </li>
)

export default function GroupedList({
    items,
}: {
    items: { [header: string]: ListGroupItemProps[] }
}) {
    return Object.entries(items).map(([header, items], i) => (
        <ListGroup key={i} header={header}>
            {items.map((item, i) => <ListGroupItem key={i} {...item} />)}
        </ListGroup>
    ))
}
