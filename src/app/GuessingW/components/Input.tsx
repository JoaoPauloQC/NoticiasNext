import { ChangeEvent, useEffect, useState } from "react";

type Props = {
    myword_splited: string[],
    word : string,
    line: number,
    indexEnable: number,
    resp: string[],
    setResp : (a: string[]) => void,
    i : number;
}

export default function Input ({myword_splited, word,line, indexEnable,resp, setResp, i} : Props) {
    
    const [isLineFinished, setIsLineFinished] = useState(false)
    const [isThere, setIsThere] = useState("")
    const HasOrNot = (e: ChangeEvent<HTMLInputElement>) => {
        const response = e.target.value
        console.log()
        if (indexEnable < line){
            if (myword_splited.includes(response)){
                return setIsThere("bg-green")
            }
            return setIsThere("bg-red")
        }
        console.log("for some reason i am here")
    }
    const UpdatingColor = (i) =>{
        if (line === indexEnable){
            return setIsThere(" bg-neutral-100")
        }
        else if (line < indexEnable){
            return setIsThere(" bg-neutral-500")
        }
        else if (indexEnable < line){
            if (myword_splited.includes(resp[i])){
                return setIsThere(" bg-green-50")
            }
            return setIsThere(" bg-red-100")
        }   
    }

    useEffect(() => {UpdatingColor(i)},[line])
    
    return(
        <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => {const newword = resp.map((c,index) => index == i? e.target.value : c) ;console.log(newword); setResp(newword);HasOrNot(e)}} className={"w-20 h-20 text-center    text-neutral-950 border-neutral-900 outline-none border-4 rounded-2xl " + (indexEnable === line? "" : "disabled cursor-not-allowed ") + (isThere)} />
    )
}