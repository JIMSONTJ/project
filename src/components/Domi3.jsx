import React from "react";
import {motion} from "framer-motion";
const Domi3 = () => {
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex flex-col w-screen h-screen items-center justify-center">
            <motion.div  whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="ml-60 ">
            <div className="text-[#fcbec6] text-6xl w-[681px] h-[56px] font-serif">SBF’s CEX tape</div>
            <div className="w-[408px] h-[46px] text-[#ffff] mt-5">But then came the BlockFi news about the company finally 
            closing its FTX deal. </div>
            <div className="w-[733px] h-[176px]  text-[#ffff] mt-5 text-2xl font-sans ">The poster boy of crypto, SBF, acquired<br/>
             BlockFi for <b> $240 million</b> with a  <b>$400<br/>
            million</b> line of credit and over <b>$680<br/>million</b> worth of assets.</div>
            
            </motion.div>






        </div>








    )








}
export default Domi3;