"use client"
import { Children, createContext, useState } from "react";

export const SideContext = createContext(); // initializing a context called searchContext"

export const SideProvider = ({children}) =>{
    const [ toggle, setToggle ] = useState(false)

    return(
        <SideContext.Provider value={{ toggle, setToggle}}>
            {children}
        </SideContext.Provider>
    )
}