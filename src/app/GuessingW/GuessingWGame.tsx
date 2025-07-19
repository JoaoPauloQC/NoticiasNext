"use client"

import { Button } from "@/components/Buttons"
import { ChangeEvent, use, useState } from "react"

export const GuessingWGame = () => {

    const [word, setword] = useState('bingo')
    const myword_splited = word.split("")
    const [resp , setResp] = useState(Array(word.length).fill(""))
    const [line,setLine] = useState(0)

    return (
        <>  
        {Array(word.length).fill("").map((c,indexEnable) => 
            <div className="flex">
                {myword_splited.map((c,i) => { return (

                    <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => {const newword = resp.map((c,index) => index == i? e.target.value : c) ;console.log(newword); setResp(newword)}} className={"w-20 h-20 text-center   bg-neutral-200 text-neutral-950 border-neutral-900 outline-none border-4 rounded-2xl " + (indexEnable == line? "" : "disabled bg-neutral-500")} />

                )})}
            </div>
        )}

            <Button onClick={() => console.log(myword_splited)}> Veja a palavra </Button>
        </>
    )

}