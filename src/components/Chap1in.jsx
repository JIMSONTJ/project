import React from "react";
import Image from "next/image"
import {motion} from "framer-motion"
const Chap1in =()=>{
    const [move,setMove] = React.useState(false);
    return(

        <div  className="flex flex-row gap-30 mt-40 ">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="flex-col text-[#ffffff] mt-4 ">
            <div className="text-[#fcbec6] ">Chapter 1</div>
            
            <div  className="mt-4 text-xl w-[446px] h-[56px]">The first signs of snow!</div>
        <div className=" mr-10 font-semibold">Environmentalists did what environmentalists do! Protest against mining, 
            albeit<br/> since the world moved on to crypto, protest shifted from physical mining to<br/> digital.
             With massive energy shocks, China halted modern-day miners with a<br/> ban, which is so unlike a republic nation.</div>
             </motion.div>
             
             <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[404px] h-[394px] ml-44 "><Image
             src="/sno.png"
             alt=""
             width="400"
             height="300"
             /></motion.div>






        </div>





    )

}
export default Chap1in;