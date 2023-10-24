import { Right } from "@icon-park/react"

export interface ListGroupItemProps {
    id: number | string,
    onClick?: (id: number | string) => void,
    label: string,
}

const ListGroupItem = ({
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
);

export default ListGroupItem;
