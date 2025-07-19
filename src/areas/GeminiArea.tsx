import { Gemini } from "@/AI/Gemini";
import { Button } from "@/components/Buttons";

export default function GeminiArea() {

    return (
        <div className="CHATGPT flex pb-10">
            <div className="wrapper">
                <Button className="CHATGPT__button py-2 px-5 rounded-xl " onClick={() => console.log(Gemini())} animation="geminibtn"> Seja atualizado </Button>
            </div>
        </div>
    )

}