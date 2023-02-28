import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx3 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

<div className="ml-44 mt-4">
    <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}}  className="ml-7">
    <div className="text-[#fcbec6] text-3xl w-[674px] h-[56px]">The Desk where the CEX tape was streamed</div>
    <div className="text-[#ffff]  w-[614px] h-[64px] font-sans">We know you know; we know that you know the FTX collapse <br/>
        story, given none of us are cavemen yet.</div>
        </motion.div>
        
        <motion.div whileInView={{x:  move ?  -5 : 100}} transition={{delay:0.7}} className="w-[848px] h-[440px] p-8">
            <Image
            src="/ftx.png"
            alt=""
            width="848"
            height="440"
        
            
            />



        </motion.div>






</div>
    )
}
export default Ftx3;