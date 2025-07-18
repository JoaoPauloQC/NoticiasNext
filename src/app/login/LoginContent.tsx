"use client"

import { useUser } from "@/data/Context"
import { useRouter } from "next/navigation"
import { title } from "process"
import { MouseEvent,ChangeEvent, useState } from "react"
import { Button } from "@/components/Buttons"

export const metadata = {
    title: "Login"
}

export const LoginContent = () => {

    const {user, setUser} = useUser()
    const {img,setImg} = useUser()
    const router = useRouter()



    const handlesubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const gettingimg = async () =>{
            const data = await fetch(`https://api.github.com/users/${user}`).then(res => res.json()).then(data => data) 
            console.log(data)
            console.log(data.avatar_url)  
            setImg(data.avatar_url)   
            console.log(img)      
            

        }
        gettingimg()
        router.push("/")
        
    }
    const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }


    return (

        <div className="login__space flex justify-center items-center content-center">
        <div className="login__form__container bg-neutral-500 rounded-xs h-60  p-10 w-3xs gap-8 flex flex-col justify-center">
            <input className="rounded-lg bg-neutral-300 px-3 py-1 outline-0 " placeholder="Nome" onChange={handlechange} type="text" name="name"  />
            <Button className="cursor-pointer rounded-md bg-neutral-800 p-1 w-25 self-center" onClick={handlesubmit}>Enviar</Button>
        </div>
        </div>

    )

}



