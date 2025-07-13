import { BaseCard } from './base-card';

export interface CellCardProps {
    type: 'CELL_CARD';
    position: string;
    isFilled: boolean;
    isCorrect: boolean;
    id: string;
}

export function CellCard(props: CellCardProps) {
    return (
        <BaseCard 
            as={'button'}
            style={{ gridArea: props.position }} 
            className='cursor-pointer hover:border-blue-400'
        >
            {props.position}
        </BaseCard>
    );
}

export default CellCard;