"use client"

import { createContext , useContext , useState, ReactNode } from "react";

type UserContextType = {
    user: string,
    setUser: (user: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({children} : { children: ReactNode}) => {
    const [user,setUser] = useState('Visitante')

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () =>{
    const context = useContext(UserContext);
    if(!context) throw new Error("useGlobal deve see utilizado com um provedor")
    return context
}



  