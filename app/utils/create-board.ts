import type { BoardConfig } from "./board-config";
import lettersNumbers from "./letters-map";
import { type WordCardProps } from "~/components/word-card";
import { type CellCardProps } from "~/components/cell-card";
import { v4, v7 } from "uuid";
export interface CreatedBoard {
    positions: (WordCardProps | CellCardProps)[];
    id: string;
    gridTemplateAreas: string;
    gridTemplateColumns: string;
    gridTemplateRows: string;
}

export function createBoard({columnsQty, linesQty ,...configBoard}: BoardConfig, id: string): CreatedBoard {

        const localStorage = window.localStorage;
        
        const boardOnLocalStorage = localStorage.getItem(`board:${id}`);

        if(boardOnLocalStorage){
            const parsedBoard = JSON.parse(boardOnLocalStorage) as CreatedBoard;
            return {
                ...parsedBoard,
                id,
            };
        }
        
        let cardsList = [];
        let gridTemplateAreas = '';

        for(let line = 0; line <= linesQty; line++){

            let wordCardLine: WordCardProps = {
                type: 'WORD_CARD',
                position: `word-line-${line}`,
                word: configBoard.wordLines[line - 1],
                id: v4()
            }

            if(line != 0){
              cardsList.push(wordCardLine);
            }

            gridTemplateAreas += `"word-line-${line}`;
            
            for(let column = 1; column <= columnsQty; column++){
                let letter = lettersNumbers[line];
                let number = column;

                if (line === 0) {

                    let wordCardColumn: WordCardProps = {
                        type: 'WORD_CARD',
                        position: `word-column-${column}`,
                        word: configBoard.wordColumns[column - 1],
                        id: v4()
                    }

                    cardsList.push(wordCardColumn);

                    gridTemplateAreas = gridTemplateAreas.concat(` ${letter}-column-${number}`)
                    continue;
                }

                gridTemplateAreas = gridTemplateAreas.concat(` ${letter}${number}`)

                let cellCard: CellCardProps = {
                    type: 'CELL_CARD',
                    position: `${letter}${number}`,
                    isFilled: false,
                    isCorrect: false, 
                    id: v4()
                }
                cardsList.push( cellCard );
            }
            gridTemplateAreas += `" \n`;
        }
        
        const mountedBoard = {
            positions: cardsList,            
            id,
            gridTemplateAreas, 
            gridTemplateColumns: `repeat(${columnsQty + 1}, 1fr)`,
            gridTemplateRows: `repeat(${linesQty + 1}, 1fr)`,  
        }

        localStorage.setItem(`board:${id}`, JSON.stringify(mountedBoard));

        return mountedBoard;

        
}