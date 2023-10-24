import ListGroup from "./ListGroup";
import ListGroupItem, { ListGroupItemProps } from "./ListGroupItem";

const GroupedList = ({
    items,
}: {
    items: { [header: string]: ListGroupItemProps[] }
}) => {
    return Object.entries(items).map(([header, items], i) => (
        <ListGroup key={i} header={header}>
            {items.map((item, i) => <ListGroupItem key={i} {...item} />)}
        </ListGroup>
    ))
}

export default GroupedList;
