import { createBoard } from "~/utils/create-board";
import { CardSelector } from "./card-selector";
import type { BoardConfig } from "~/utils/board-config";

interface BoardProps {
    boardConfig: BoardConfig;
    id: string
}

export function Board({boardConfig, id}: BoardProps){
    
    const board = createBoard(boardConfig, id);
    
    return (
        <section 
            className="grid gap-1" 
            style={{
                gridTemplateColumns: board.gridTemplateColumns,
                gridTemplateRows: board.gridTemplateRows,  
                gridTemplateAreas: board.gridTemplateAreas
            }}
        >
            {board.positions.map(({ type, ...cardProps }) => {
                const CardComponent = CardSelector[type];
                return <CardComponent key={cardProps.id} {...cardProps as any} />;
            })}
        </section>
    );
}