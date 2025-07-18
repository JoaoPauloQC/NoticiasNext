"use client"

import { useUser } from "@/data/Context"
import Login from "@/areas/Login"
import Link from "next/link"
import { Logo } from "@/components/Logo"

type Props = {

    user : string

}

export const Header = () => {
    const {user,setUser} = useUser()
    const {img, setImg} = useUser()


    return (
        
        <div className="header__container">
            <div className="wrapper">
                <div className="header__content flex justify-between ">
                    <div className="header__left">
                    <Logo></Logo>
                    </div>
                    <div className="header__right">
                        <Login user={user} img={img}/>
                    </div>
                </div>

            </div>
        </div>


    )

} 

