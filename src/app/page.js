"use client"
import React, { useState} from "react";
import Navbar from "@/components/Navbar_component/Navbar";
import Feeds from "@/components/MainContent/Feeds";
import SideBar from "@/components/SideContent/SideBar";
import NavbarScroll from "@/components/Navbar_component/NavbarScroll";


export default function Home() {

  const [ count, setCount ] = useState("data")
  return (
    <div className="container Page_container">
      <div>
        <Navbar/>
      </div>
      
    <div className="con">
      <SideBar/>
      
    <Feeds cou={count}/>
      
      
    </div>
    </div>
  );
}
