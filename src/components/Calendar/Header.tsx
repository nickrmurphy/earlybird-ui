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
        <div className="flex items-center text-gray-900">
            <ArrowButton
                srLabel="Previous month"
                direction='prev'
                onClick={onArrowClick}
            >
                <LeftSmall className="h-5 w-5" aria-hidden="true" />
            </ArrowButton>
            <div className="flex-auto text-sm font-semibold font-serif">
                {title}
            </div>
            <ArrowButton
                srLabel='Next month'
                direction='next'
                onClick={onArrowClick}
            >
                <RightSmall className="h-5 w-5" aria-hidden="true" />
            </ArrowButton>
        </div>
    );
}

export default Header;
