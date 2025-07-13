import { Board } from "~/components/board";
import { CreateBoardConfigWithRandomWords } from "~/utils/board-config";

export function Welcome() {
  const boardConfig = new CreateBoardConfigWithRandomWords(3,3)
  
  return (
    <main className="flex h-lvh items-center justify-center pt-16 pb-4">
      <Board boardConfig={boardConfig} />
    </main>
  );
}


