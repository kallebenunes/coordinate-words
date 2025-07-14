import { v7 } from "uuid";
import { useLocalStorage } from "~/.client/useLocalStorage";
import type { ClientActionFunctionArgs } from "react-router";
import type { SentWord } from "~/components/sent-words";

export async function clientAction(data: ClientActionFunctionArgs) {
  const formData = await data.request.formData()

  const word = formData.get("word") as string;

  const localStorage = useLocalStorage();
  
  const wordListAlreadyExists = localStorage.getItem("wordsList")

  if(wordListAlreadyExists){
    const wordsList: SentWord[]= JSON.parse(wordListAlreadyExists);
    wordsList.push({
      id: v7(),
      word
    });
    localStorage.setItem("wordsList", JSON.stringify(wordsList));  
  } else {
    const wordsList: SentWord[] = [{
      id: v7(),
      word
    }];
    localStorage.setItem("wordsList", JSON.stringify(wordsList));
  }

}
