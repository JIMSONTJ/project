import React from "react";
import Image from "next/image";

const Chap = ()=> {

    return(
        <div id="d" className='w-screen h-screen flex justify-center items-center text-center '>
        <div className="flex flex-col ml-10 mt-48">
        <div className='ch text-[#ffffff] '>Chapter 2</div>
         
         <div className=' absolute items-center justify-center pt-40 pl-48 mt-20' >
         
         <Image className="animate-bounce" 
         src="/mo.png"
         alt=""
         width="30"
         height="30"
         />
        
         </div>
         <div className="text-[#ffffff] mt-36 -ml-2">Use Scroll</div>
          </div>
          </div>
    )


}
export default Chap;