import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
const Ftx8 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex mt-28 ml-36 ">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[428px] h-[508px] p-8">
                <Image
                src="/cbak.png"
                alt=""
                width="428"
                height="508"
                />
             </motion.div>
             <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="ml-36">
             <div className="text-[#fcbec6] w-[559px] h-[224px] text-4xl font-serif mt-4 p-8 ">By November 11, SBF<br/> stepped down as FTX <br/>CEO and the company <br/>filed for bankruptcy.</div>
                <div className="w-[594px] h-[204px] ml-8">
             <div className="text-[#ffff] font-sans"><b>Remember how we said at the beginning that<br/> FTX was valued at $32 billion? Well, now it's 0!</b></div>
    
    <div className="text-[#ffff] font-sans mt-4">Since then, the events kept unravelling,
 and SBF <br/>became the biggest bluffmaster from the poster <br/>boy of crypto</div></div>
 </motion.div>










        </div>





    )


}
export default Ftx8;