"use client"
import React, { useState} from "react";
import Navbar from "@/components/Navbar_component/Navbar";
import Feeds from "@/components/MainContent/Feeds";
import SideBar from "@/components/SideContent/SideBar";


export default function Home() {

  const [ count, setCount ] = useState("data")
  return (
    <div className="container Page_container">
      <Navbar/>

    <div>
      <SideBar/>
      <Feeds cou={count}/>
      
    </div>
    </div>
  );
}
