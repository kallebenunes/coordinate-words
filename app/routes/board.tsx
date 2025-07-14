
import { Board } from "~/components/board";
import { CreateBoardConfigWithRandomWords, type BoardConfig } from "~/utils/board-config";
import { useLoaderData, type ShouldRevalidateFunctionArgs } from "react-router";
import { SentWords, type SentWord } from "~/components/sent-words";
import { useLocalStorage } from "~/.client/useLocalStorage";
import { SelectedCoordinate } from "~/components/selected-coordinate";
import { WordSender } from "~/components/word-sender";
import type { Route } from "../+types/root";
import { useBoardStore } from "~/stores/board-store";

export function shouldRevalidate(arg: ShouldRevalidateFunctionArgs) {
    
}

export function clientLoader() {
    const localStorage = useLocalStorage();
    const wordsListAlreadyExists = localStorage.getItem("wordsList");
    const wordsList:SentWord[] = wordsListAlreadyExists ? JSON.parse(wordsListAlreadyExists) : [];
    const boardConfig: BoardConfig = new CreateBoardConfigWithRandomWords(3, 3);
    console.log(wordsList)

    return { boardConfig, wordsList };
}

export default function BoardRoute({
    params
}: Route.ComponentProps) {
    
    const { isChosingWord, selectedWord } = useBoardStore()
    const {boardConfig, wordsList} = useLoaderData<typeof clientLoader>();
    const boardId = params["board-id"] as string;

    return (
        <main className="flex h-lvh items-center justify-center pt-16 pb-4 flex-col">
            
            {!isChosingWord && <SelectedCoordinate/>}
            {isChosingWord && (
                <h1 className="text-2xl text-green-500 font-bold mb-4">Select a coordinate for the word: {selectedWord.word}</h1>
            )}
            <div className="flex gap-4">
                <Board id={boardId} boardConfig={boardConfig}  />
                <span className="bg-gray-400 w-[2px] h-full flex"></span>
                <SentWords wordsList={wordsList}/>
            </div>
            
            <div>
                {!isChosingWord && <WordSender/>}
            </div>
        </main>
    )
}
