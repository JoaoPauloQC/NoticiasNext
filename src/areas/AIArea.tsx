import { ChatGPT } from "@/AI/ChatGPT";
import { ReactNode } from "react";
import ChatGPTArea from "./ChatGPTArea";
import GeminiArea from "./GeminiArea";
import { categories, news, thenew } from '@/data/data'

type Props = {
    news : thenew[],
    setNews: (n: thenew[]) => void,
    children?: ReactNode,
}

export default function AIArea ({children,news,setNews}: Props){

    return (
        <div className="py-5 aiarea">
            <div className="wrapper flex flex-col justify-center items-center">
                <ChatGPTArea/>
                <GeminiArea setNews={setNews} news={news}/>
                {children}
            </div>
        </div>
    )

}