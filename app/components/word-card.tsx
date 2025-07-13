import { BaseCard } from "./base-card"

export interface WordCardProps {
    type: 'WORD_CARD',
    word: string,
    position: string,
    id: string
}

export function WordCard(props: WordCardProps) {
    return (
        <BaseCard className="" style={{
            gridArea: props.position,
        }}>
            {props.word}
        </BaseCard>
        
    )
}