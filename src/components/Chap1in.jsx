import React from "react";
import Image from "next/image"
import {motion} from "framer-motion"
const Chap1in =()=>{
    const [move,setMove] = React.useState(false);
    return(

        <div  className="flex  mt-40 ">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="flex-col text-[#ffffff] mt-4 ">
            <div className="text-[#fcbec6] text-xl font-normal">Chapter 1</div>
            
            <div  className=" fou mt-4   h-[56px] font-normal">The first signs of snow!</div>
        <div className="    text-xl font-normal mt-6 ">Environmentalists did what environmentalists do! Protest<br/>against mining, 
            albeit since the world moved on to crypto,<br/> protest shifted from physical mining to digital.
             With massive<br/> energy shocks, China halted modern-day miners with a ban,<br/> which is so unlike a republic nation.</div>
             </motion.div>
             
             <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[404px] h-[394px] ml-72 "><Image
             src="/sno.png"
             alt=""
             width="400"
             height="300"
             /></motion.div>






        </div>





    )

}
export default Chap1in;