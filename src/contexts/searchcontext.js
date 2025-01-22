"use client"
import { createContext, useState, useEffect } from "react";
import { SearchVideos } from "@/util/fetchData";
import { trendingVideos } from "@/util/fetchData";

export const SearchContext = createContext(); // initializing a context called searchContext"

export const SearchProvider = ({children}) =>{
    const [ result, setResult ] = useState([])

    useEffect(()=>{
        const fetchDefaultVideos = async()=>{
            const data = await trendingVideos()
            setResult(data.videos)
        }
        fetchDefaultVideos();
    }, [])
    
    return(
        <SearchContext.Provider value={{result, setResult}}>
            {children}
        </SearchContext.Provider>
    )
}
