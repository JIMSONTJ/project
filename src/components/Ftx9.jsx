import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx9 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex  mt-28">
           
           <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}}  className="text-[#ffff] w-[594px] h-[192px] font-sans text-2xl ml-10 font-normal">
            <div>Following the FTX fiasco, $SOL token also took a heavy<br/> hit, and Solana lost a major market cap. </div>

   <div className="mt-5">Even the good guy, aka Binance, got wrapped in <br/>its mess because of its inability
 to properly show<br/> proof of reserves after the FTX craziness.</div>
 </motion.div>
 
 <motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[372px] h-[372px] p-4 mt-16 ml-72">
    <Image
    src="/knd.png"
    alt=""
    width="372"
    height="372"
    
    />
 </motion.div>



</div>
    )
    }
    export default Ftx9;








