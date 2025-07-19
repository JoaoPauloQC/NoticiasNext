import { ChatGPT } from "@/AI/ChatGPT";
import { Button } from "@/components/Buttons";

export default function ChatGPTArea (){


    return (
        <div className="CHATGPT flex pb-10">
            <div className="wrapper flex content-center justify-center">

                <Button className="CHATGPT__button py-2 px-5 rounded-xl self-center justify-self-center" onClick={ChatGPT} animation="chatgptbtn"> Seja atualizado </Button>

            </div>
        </div>

    )
}