import { CreateBoard } from "~/components/create-board";
import { CreateBoardConfigWithRandomWords } from "~/utils/board-config";

export function Welcome() {
  
  return (
    <main className="flex h-dvh items-center justify-center pt-16 pb-4">
      <CreateBoard/>      
    </main>
  );
}


