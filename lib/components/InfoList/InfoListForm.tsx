import { ReactNode } from "react";

export interface InfoListFormProps {
    header: string,
    subheader?: string,
    children?: ReactNode,
}

const InfoListForm = ({
    header,
    subheader,
    children,
}: InfoListFormProps) => (
    <div>
        <div className="eb-px-4 sm:eb-px-0">
            <h3 className="eb-text-base eb-font-semibold eb-leading-7 eb-text-gray-900 eb-font-serif">{header}</h3>
            {
                subheader && <p className="eb-mt-1 eb-max-w-2xl eb-text-sm eb-leading-6 eb-text-gray-500">{subheader}</p>
            }
        </div>
        <div className="eb-mt-6 eb-border-t eb-border-gray-100">
            <dl className="eb-divide-y eb-divide-gray-100">
                {children}
            </dl>
        </div>
    </div>
);

export default InfoListForm;
