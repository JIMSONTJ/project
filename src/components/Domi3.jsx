import React from "react";
import {motion} from "framer-motion";
const Domi3 = () => {
    const [move,setMove] = React.useState(false);
    return( 
        <div className="flex  ml-36 mt-56">
            <motion.div  whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className=" ">
            <div className="nt text-[#fcbec6]   h-[56px] font-normal">SBF’s CEX tape</div>
            <div className="w-[408px] h-[46px] text-[#ffff] mt-5 text-xl font-normal">But then came the BlockFi news about the company finally 
            closing its FTX deal. </div>
            <div className="th w-[733px] h-[176px]  text-[#ffff] mt-5 text-2xl font-normal ">The poster boy of crypto, SBF, acquired<br/>
             BlockFi for <b> $240 million</b> with a  <b>$400<br/>
            million</b> line of credit and over <b>$680<br/>million</b> worth of assets.</div>
            
            </motion.div>






        </div>








    )








}
export default Domi3;