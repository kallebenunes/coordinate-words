import { Link } from "react-router";
import { v7 } from "uuid";

export function CreateBoard(){
    return (
        <Link to={`/board/${v7()}`} className="bg-blue-500 text-blue-200 px-4 py-2 hover:bg-blue-600 transition-colors rounded-xl cursor-pointer">
            Create Board
        </Link>
    )
}