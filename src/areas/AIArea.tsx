import { ChatGPT } from "@/AI/ChatGPT";
import { ReactNode } from "react";
import ChatGPTArea from "./ChatGPTArea";
import GeminiArea from "./GeminiArea";

export default function AIArea ({children} : {children? : ReactNode}){

    return (
        <div className="py-5 aiarea">
            <div className="wrapper flex flex-col justify-center items-center">
                <ChatGPTArea/>
                <GeminiArea/>
                {children}
            </div>
        </div>
    )

}