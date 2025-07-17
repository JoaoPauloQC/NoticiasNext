"use client"

import { useUser } from "@/components/Context"
import Login from "@/components/Login"
import Link from "next/link"

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

                    </div>
                    <div className="header__right">
                        <Login user={user} img={img}/>
                    </div>
                </div>

            </div>
        </div>


    )

} 

