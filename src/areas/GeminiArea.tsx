import Gemini  from "@/AI/Gemini";
import { Button } from "@/components/Buttons";
import { categories, news, thenew } from '@/data/data'

type Props = {
    news : thenew[],
    setNews: (n: thenew[])=> void,
}

export default function GeminiArea({news,setNews}: Props) {

    const handleClick = async () =>{
        const respArray = await Gemini()
        console.log("Resp array = ", await respArray)
        console.log("Title should be: ", await respArray[0], typeof await respArray[0])
        const newNew : thenew = {
            title: respArray? respArray[0].trim() : "",
            category: respArray? respArray[1].trim() : "",
            link: respArray? respArray[2].trim() : "",
            img: respArray? respArray[3].trim() : ""
        }
        console.log(await newNew)
        const newNews : thenew[] = [...news,newNew]
        setNews(newNews) 
    }

    return (
        <div className="CHATGPT flex pb-10">
            <div className="wrapper">
                <Button className="CHATGPT__button py-2 px-5 rounded-xl " onClick={async () => {handleClick()}} animation="geminibtn"> Seja atualizado </Button>
            </div>
        </div>
    )

}