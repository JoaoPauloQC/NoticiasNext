"use client"

import { categories , news } from "@/data/data"
import { Button } from "../components/Buttons"
import { useEffect, useState } from "react"
import News from "../components/News"
import ChatGPTArea from "./ChatGPTArea"
import GeminiArea from "./GeminiArea"
import AIArea from "./AIArea"

export default function FilterNews() {
    
    const [gotnews,setNews] = useState(news)
    const [category, setCategory] = useState("")
    const [filterednews, setfilteredNews] = useState(gotnews)
    useEffect(function(){
        if (category == "" || category == "all"){
            setfilteredNews(gotnews)
        }
        else{
            setfilteredNews(news.filter(n => n.category == category))
        }

        

    }, [category])
    useEffect(()=> setfilteredNews(gotnews), [gotnews])

    const capitalizing = (name : string) => {
            return name[0].toUpperCase() + name.slice(1)
        }

    return (

        <div className="news_all pt-32">
            <div className="filter__buttons flex gap-10 max-lg:px-10 max-lg:flex-wrap max-lg: justify-center">
            <Button className={"bg-amber-700 p-1.5 rounded-xl min-w-24 text-center"} onClick={() => setCategory("all")}>Todas</Button>
            {categories.map(c => 
                <Button className={`${"filter__buttons__"+ c} p-1.5 rounded-xl min-w-24 text-center`} value={c} onClick={() => setCategory(c)}>{capitalizing(c)}</Button>
            )}
            </div>
            <News news={filterednews}></News>
            <AIArea setNews={setNews} news={gotnews}></AIArea>
        </div>
    )


}