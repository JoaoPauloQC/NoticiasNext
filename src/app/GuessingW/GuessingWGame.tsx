"use client"

import { Button } from "@/components/Buttons"
import { ChangeEvent, use, useEffect, useState } from "react"
import Line from "./components/Line"

export const GuessingWGame = () => {

    const [word, setword] = useState('bingo')
    const myword_splited = word.split("")
    const [line,setLine] = useState(0)
    
    
    useEffect(()=> console.log(line), [line])
    

    return (
        <>  
        {Array(word.length).fill("").map((c,indexEnable) => 
            <Line  line={line} indexEnable={indexEnable} word={word} myword_splited={myword_splited}/>
        )}

            <Button onClick={() => { return setLine((line === myword_splited.length - 1)? 0 : line+1)}} className="bg-neutral-600 rounded-2xl p-3 text-lg"> Veja </Button>
        </>
    )

}