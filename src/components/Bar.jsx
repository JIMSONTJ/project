import React from "react";
import Image from "next/image";
import { useState,useEffect } from "react";
export default function Bar(){

const [filled,setFilled] = useState(0);
const [isRunning,setIsRunning] = useState(true);


useEffect(() => {
    if ( filled < 100 && isRunning){
        setTimeout(() => setFilled(prev => prev += 2), 100)
      
    }
    
    
},[filled,isRunning])

  return(
  
      <div className="flex flex-col w-screen h-screen justify-center items-center  mt-0 mr-6" >
        
       <div className="flex p-2 "> <div className="text-[#ffffff] text-2xl font-bold">Loading</div><div className="ml-3 mt-2">
        <Image
        src="/ic.jpg"
        alt=""
        width="15"
        height="15"/>
        </div>
        </div>
      <div className=" w-[250px] h-[3px] bg-gray-500  mt-30 ">
     

      
        <div 
         style={{
            height:"100%",
            width:`${filled}%`,
            backgroundColor:"#ffffff",
            transition:"width 0.2s"
            
        }}>
        
        </div>
        </div>
        </div>
     
   )
}
