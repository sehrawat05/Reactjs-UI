import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
import {data,data2} from "./Data";

const App = () => {
  const [bgColor,setbgColor]=useState("#2320f")
  const[color,setColor]=useState("white")
  const[toggle,setToggle]=useState(true)

  const toggleButton=()=>{
    setToggle(!toggle)
    if(toggle){
      setbgColor("#d5d8d8")
      setColor("black")
      document.querySelector("body").style.backgroundColor="white"
    }
    else{
      setbgColor("#555555")
      setColor("white")
      document.querySelector("body").style.backgroundColor="black"
    }
  }
  return (
    <>
      <Navbar  bgColor={bgColor} color={color} toggleButton={toggleButton} toggle={toggle}/>
      <div className="container">
        <div className="side_bar">
          <Sidebar  bgColor={bgColor} color={color} />
        </div>
        <div className="post_section">
          {data.map((d)=>(
            <Post key={d.id} data={d} bgColor={bgColor} color={color} />
          ))}
          
        </div>
        <div className="right_bar">
          {data2.map((d)=>(
            <Rightbar key={d.id} data={d} bgColor={bgColor} color={color}/>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default App;
