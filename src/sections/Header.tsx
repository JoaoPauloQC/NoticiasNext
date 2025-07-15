"use client"

import { useUser } from "@/components/Context"
import Login from "@/components/Login"
import Link from "next/link"

type Props = {

    user : string

}

export const Header = () => {
    const {user,setUser} = useUser()
    


    return (
        
        <div className="header__container h-2">
            <div className="wrapper">
                <div className="header__content flex justify-between">
                    <div className="header__left">

                    </div>
                    <div className="header__right">
                        <Login user={user} />
                    </div>
                </div>

            </div>
        </div>


    )

} 

