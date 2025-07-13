import { CellCard } from "./cell-card";
import { WordCard } from "./word-card";

export const CardSelector = {
    CELL_CARD: CellCard,
    WORD_CARD: WordCard,
} as const;