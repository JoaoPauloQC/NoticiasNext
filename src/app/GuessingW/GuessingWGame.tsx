"use client"

import { Button } from "@/components/Buttons"
import { ChangeEvent, use, useEffect, useState } from "react"
import Line from "./components/Line"
import GameOverPopUp from "./components/GameOverPopUp"

export const GuessingWGame = () => {

    const [word, setword] = useState('bingo')
    const myword_splited = word.split("")
    const [line,setLine] = useState(0)
    const [gameWon, setGameWon] = useState(word.length+1)
    const [isPopUpVisible, setIsPopUpVisible] = useState(false)
    useEffect (()=> {console.log("gamewon: " + gameWon); line != 0? setLine(gameWon+1) : setLine(line)},[gameWon])
    useEffect(()=> gameWon < 6? setLine(gameWon+1) : console.log("Line = " + line + " Pop is vsibible = " + isPopUpVisible) , [line])
    useEffect(()=> console.log(isPopUpVisible),[isPopUpVisible])

    const handleclick = () =>{
        if(gameWon == 6){
            console.log(gameWon)
            if (line != word.length-1){
                return setLine((line === myword_splited.length - 1)? 0 : line+1)
            }
            else{
                
                setLine(word.length)
                console.log("else")
                setIsPopUpVisible(true)
            }
        }
    }

    return (
        <>
            <div className="GuessingW__inputs">  
            {Array(word.length).fill("").map((c,indexEnable) => 
                <Line gameWon={gameWon} setGameWon={setGameWon} line={line} indexEnable={indexEnable} word={word} myword_splited={myword_splited}/>
            )}
            </div>
            <Button onClick={() => handleclick()} className="bg-neutral-600 rounded-2xl p-3 text-lg"> Veja </Button>
            <GameOverPopUp isPopUpVisible={isPopUpVisible} setIsPopUpVisible={setIsPopUpVisible} />
        </>
    )

}