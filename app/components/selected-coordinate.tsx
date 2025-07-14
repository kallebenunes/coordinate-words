import { useBoardStore } from "~/stores/board-store";

export function SelectedCoordinate (){

    return (
        <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-gray-500">Your coordinate is: A2</span>
        </div>
    );
}