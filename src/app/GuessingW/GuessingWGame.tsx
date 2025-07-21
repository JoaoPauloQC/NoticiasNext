"use client"

import { Button } from "@/components/Buttons"
import { ChangeEvent, use, useEffect, useState } from "react"
import Line from "./components/Line"

export const GuessingWGame = () => {

    const [word, setword] = useState('bingo')
    const myword_splited = word.split("")
    const [line,setLine] = useState(0)
    const [gameWon, setGameWon] = useState(word.length+1)
    useEffect (()=> {console.log("gamewon: " + gameWon); line != 0? setLine(gameWon+1) : setLine(line)},[gameWon])
    useEffect(()=> gameWon < 6? setLine(gameWon+1) : console.log() , [line])
    

    return (
        <>  
        {Array(word.length).fill("").map((c,indexEnable) => 
            <Line gameWon={gameWon} setGameWon={setGameWon} line={line} indexEnable={indexEnable} word={word} myword_splited={myword_splited}/>
        )}

            <Button onClick={() => { if(gameWon == 6){ console.log(gameWon); return setLine((line === myword_splited.length - 1)? 0 : line+1)}}} className="bg-neutral-600 rounded-2xl p-3 text-lg"> Veja </Button>
        </>
    )

}