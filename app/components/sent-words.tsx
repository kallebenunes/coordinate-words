import type { w } from "node_modules/react-router/dist/development/lib-B33EY9A0.mjs";
import { useFetcher } from "react-router";
import { useBoardStore } from "~/stores/board-store";

export interface SentWord {
    word: string;
    id: string;
}

export function SentWords({wordsList}: {wordsList: SentWord[]}) {
    const fetcher = useFetcher();

    const { setIsChosingWord, setSelectedWord  } = useBoardStore()
    
    function handleSelectWord(e: React.MouseEvent<HTMLButtonElement>) {
        setIsChosingWord(true);    
        setSelectedWord({
            word: e.currentTarget.innerText,
            position: e.currentTarget.dataset.position || '',
            id: e.currentTarget.dataset.id || ''
        })
    }

    return (
        <fetcher.Form data-test-id='sent-words'>
            <h1 className="flex justify-center mb-8 max-h-1 overflow-x-visible ">Sent words</h1>
            {wordsList.map(({id, word}) => (
                <button className="cursor-pointer border-gray-500 border-2 rounded-lg w-full px-2.5 py-1 hover:bg-gray-500 transition-all mb-2" onClick={handleSelectWord} key={id}>
                    {word}
                </button>
            ))}
        </fetcher.Form>
    )
}