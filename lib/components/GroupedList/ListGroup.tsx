import { ReactNode } from "react"

export interface ListGroupProps {
    header: string
    children?: ReactNode,
}

const ListGroup = ({
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
);

export default ListGroup;
