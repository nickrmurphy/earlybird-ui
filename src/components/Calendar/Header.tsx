import { LeftSmall, RightSmall } from '@icon-park/react';
import ArrowButton from "./ArrowButton";

const Header = ({
    title,
    onArrowClick,
}:{
    title: string,
    onArrowClick: (direction: 'next' | 'prev') => void,
}) => {
    return (
        <div className="eb-flex eb-items-center eb-text-gray-900">
            <ArrowButton
                srLabel="Previous month"
                direction='prev'
                onClick={onArrowClick}
            >
                <LeftSmall className="eb-h-5 eb-w-5" aria-hidden="true" />
            </ArrowButton>
            <div className="eb-flex-auto eb-text-sm eb-font-semibold eb-font-serif">
                {title}
            </div>
            <ArrowButton
                srLabel='Next month'
                direction='next'
                onClick={onArrowClick}
            >
                <RightSmall className="eb-h-5 eb-w-5" aria-hidden="true" />
            </ArrowButton>
        </div>
    );
}

export default Header;
