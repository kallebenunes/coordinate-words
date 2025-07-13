import type { BoardConfig } from "./board-config";
import lettersNumbers from "./letters-map";
import { type WordCardProps } from "~/components/word-card";
import { type CellCardProps } from "~/components/cell-card";
import { v4 } from "uuid";

export function createBoard({columnsQty, linesQty ,...configBoard}: BoardConfig) {
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
        
        return {
            positions: cardsList,
            gridTemplateAreas, 
            gridTemplateColumns: `repeat(${columnsQty + 1}, 1fr)`,
            gridTemplateRows: `repeat(${linesQty + 1}, 1fr)`,  
        }
}