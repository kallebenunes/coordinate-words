import { useBoardStore } from '~/stores/board-store';
import { BaseCard } from './base-card';

export interface CellCardProps {
    type: 'CELL_CARD';
    position: string;
    isFilled: boolean;
    isCorrect: boolean;
    id: string;
}

export function CellCard(props: CellCardProps) {

    const {isChosingWord, setIsChosingWord} = useBoardStore()
    const selectCoordinate = () => {
        if (isChosingWord) {
            setIsChosingWord(false);
            
        } 
    };
    return (
        <BaseCard 
            as={'button'}
            style={{ gridArea: props.position }} 
            onClick={selectCoordinate}
            className={`${isChosingWord ? 'border-green-400 cursor-pointer hover:bg-green-400 hover:text-green-900 transition-all' : ''} text-green-300`}
        >
            {props.position}
        </BaseCard>
    );
}

export default CellCard;