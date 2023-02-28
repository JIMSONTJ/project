import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


export default function Anim(){

    const{ ref,inView } = useInView({
        threshold:0,
        
    });
const target= 7.5;
const tar=9;
    

  return(
  
      <div className="mt-24 ml-24">
        
        <div>
        
       <div className="   text-[#fcbec6] w-[536px] h-[40px] text-3xl font-serif font-normal ml-24"> Inflation touched an all-time high!</div>
       <div className=" text-[#ffffff] mt-2 font-normal text-[18px] w-[594px] h-[48px] ml-24">Inflation touched an all-time high in countries like the U.K.<br/> and the U.S. (ATH).</div>
      

      
        <div className="container flex   ">
            <div className="flex flex-col mt-5">
        <span ref={ref} className=" border-2 rounded-md text-[#ffffff] text-center text-[30px] w-44 h-16 p-1"><CountUp start={0}   end={inView ? target:0} decimals={1}/>%</span>
        <div className="flex p-2">
        <div className="text-[#ffffff] text-[26px] font-normal">Inflation</div><div className="ml-2 p-1"><Image 
            src="/us.png"
            alt=""
            width="26"
            height="26"/></div></div></div>
        
        <div className="flex flex-col mt-5 ml-8">
        <span className="border-2 rounded-md text-[#ffffff] text-center text-[30px] w-44 h-16 p-1">< CountUp  start={0} end={inView ? tar:0}/>%</span>
        <div className="flex p-2">
        <div className="text-[#ffffff] text-[26px] font-normal">Inflation</div><div className="ml-2"><Image
            src="/uk.png"
            alt=""
            width="30"
            height="30"/>
            </div></div>
            
            </div>

        </div>
        </div>
        
            </div>
       
        
       
        
                
     
   )
}
