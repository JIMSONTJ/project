import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
const Ftx8 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex mt-28  ">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[428px] h-[508px] p-7">
                <Image
                src="/cbak.png"
                alt=""
                width="428"
                height="508"
                />
             </motion.div>
             <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="ml-56 mt-3 font-normal">
             <div className="by text-[#fcbec6]  h-[224px]  font-serif mt-4 ml-7  ">By November 11, SBF<br/> stepped down as FTX CEO <br/>and the company filed for <br/>bankruptcy.</div>
                <div className="w-[594px] h-[204px] ml-8 mt-6">
             <div className="text-[#ffff] font-sans text-2xl"><b>Remember how we said at the beginning that<br/> FTX was valued at $32 billion? Well, now it's 0!</b></div>
    
    <div className="text-[#ffff] font-sans mt-4 text-2xl">Since then, the events kept unravelling,
 and SBF <br/>became the biggest bluffmaster from the poster <br/>boy of crypto</div></div>
 </motion.div>










        </div>





    )


}
export default Ftx8;