import InfoListForm from "./InfoListForm"
import InfoListItem from "./InfoListItem"

export interface InfoListProps {
    header: string,
    subheader?: string,
    items: { label: string, data: string }[],
}

export const InfoList = ({
    header,
    subheader,
    items,
}: InfoListProps) => {
    return (
        <InfoListForm header={header} subheader={subheader}>
            {
                items.map((item, i) => (
                    <InfoListItem key={i} label={item.label}>
                        {item.data}
                    </InfoListItem>
                ))
            }
        </InfoListForm>
    )
}

export default {
    InfoList,
    InfoListForm,
    InfoListItem,
}