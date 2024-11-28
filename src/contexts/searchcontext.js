"use client"
import { Children, createContext, useState } from "react";

export const SearchContext = createContext(); // initializing a context called searchContext"

export const SearchProvider = ({children}) =>{
    const [ result, setResult ] = useState([])

    return(
        <SearchContext.Provider value={{result, setResult}}>
            {children}
        </SearchContext.Provider>
    )
}
