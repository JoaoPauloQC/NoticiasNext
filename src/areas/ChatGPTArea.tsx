import { ChatGPT } from "@/AI/ChatGPT";
import { Button } from "@/components/Buttons";

export default function ChatGPTArea (){


    return (
        <div className="CHATGPT flex pb-10">
            <div className="wrapper">

                <Button className="CHATGPT__button py-2 px-5 rounded-xl " onClick={ChatGPT} animation="chatgptbtn"> Seja atualizado </Button>

            </div>
        </div>

    )
}