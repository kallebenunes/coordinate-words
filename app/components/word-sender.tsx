import { useFetcher } from 'react-router'



export function WordSender(){

    const fetcher = useFetcher();
    
    return (
        <fetcher.Form method="post" action="/board-update" >
            <input type="text" name="word" placeholder="Type a word" className="border-2 border-gray-300 rounded-xl mt-6 p-2 " />
            <button type="submit" className="bg-blue-500 text-white rounded-xl px-4 py-2 ml-2">Enviar</button>
        </fetcher.Form>
    );

}
