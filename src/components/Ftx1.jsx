import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx1 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

        <div className="flex mt-32 ml-44 ">
<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="">
<div className="text-[#fcbec6] w-[618px] h-[312px] text-8xl  p-4">Officially<br/> changing<br/> WTF to FTX</div>

<div className="text-[#ffff] w-[594px] h-[96px] ml-4 font-sans text-2xl ">The SBF saga, aka the last chapter of 2022, was <br/>like a billion-dollar harry potter 
    movie but without<br/>the production value and a lot of audience funds.</div>
    </motion.div>
    
    <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[373px] h-[425px] p-8 ml-32">
        <Image
        src="/cur.png"
        alt=""
        width="373"
        height="425"
        
        />



    </motion.div>



        </div>






    )





} 
export default Ftx1;