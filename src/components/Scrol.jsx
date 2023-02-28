import React, { useState ,useEffect} from "react";
import Firs from "./Firs";
import Link from "next/link";
import Chapn from "./Chapn";


const Scrol=()=>{
const [scrollTop,setScrollTop] =useState(0);
const onScroll=()=>{
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const scrolled = (winScroll/height) * 100;
    setScrollTop(scrolled)
}
useEffect(() => {

window.addEventListener("scroll",onScroll)
return () => window.removeEventListener("scroll",onScroll)

},[]);

return(
<div>
    
     <div className="relative">   
       
   <div className="progrm ">
<div className="progrs ml-20 fixed mt-[520px] "
style={{width:`${scrollTop}%`}}></div>


 


<div className="absolute ml-14 mt-[3px]">
    <Link href="/">
 <div className="w-10 h-10 rounded-full flex justify-center items-center border    text-[#ffff]  fixed mt-[500px] backdrop-blur font-bold z-40">0</div>
 

    </Link>
</div>

<div className="absolute ml-32 mt-1">
    <Link href={'#f'}>
 <div className="w-10 h-10 ml-6 rounded-full flex justify-center items-center border  text-[#ffff] fixed  mt-[500px] backdrop-blur-[500px] font-bold  z-40">1</div>
 
 </Link>
   </div>
   <div className="absolute ml-60 mt-[5px]">
    <Link href={'#d'}>
<div className="w-10 h-10 ml-6 rounded-full flex justify-center items-center border   text-[#ffff] fixed  mt-[500px] backdrop-blur-[500px] font-bold z-40">2</div>
  
 </Link>
   </div>
   
   <div className="absolute ml-52 mt-[5px] " >
    <Link href={'#e'}>
<div className="w-10 h-10 ml-60 rounded-full flex justify-center items-center border   text-[#ffff] fixed mt-[500px] backdrop-blur-[500px] font-bold z-40">3</div>
  
 </Link>
   </div>
 
   <div className="ml-10">
   <div className="absolute ml-96 mt-[5px] " >
    <Link href={'#a'}>
<div className="w-10 h-10 ml-96 rounded-full flex justify-center items-center border   text-[#ffff] fixed mt-[500px] backdrop-blur-[500px] font-bold z-40">4</div>
  
 </Link>
   </div>
   </div>
   
   
   </div>
   



</div>

</div>

)




}
export default Scrol;