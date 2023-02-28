import React from "react";
import Image from "next/image";

const Chap3 = ()=> {

    return(
        <div id="e" className='w-screen h-screen flex justify-center items-center text-center '>
        <div className="flex flex-col ml-10 mt-48">
        <div className='text-5xl text-[#ffffff] '>Chapter 3</div>
         
         <div className=' absolute items-center justify-center pt-40 pl-24 ' >
         
         <Image className="animate-bounce" 
         src="/mo.png"
         alt=""
         width="30"
         height="30"
         />
        
         </div>
         <div className="text-[#ffffff] mt-36 -ml-3">Use Scroll</div>
          </div>
          </div>
    )


}
export default Chap3;