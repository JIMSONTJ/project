import React from "react";
import {motion} from "framer-motion";

const Ftx4 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="ml-48 mt-56 font-sans" >
            <div className=" font-bold text-[#ffff] w-[594px] h-[24px]">But here’s a TL;DR regardless —</div>
            <div className="text-[#ffff] text-xl mt-4 w-[614px] h-[192px]">FTX's fall began in early November 2022 when a <br/>CoinDesk report claimed potential leverage
                 and <br/>solvency issues surrounding trading firm Alameda<br/> Research (sister company of FTX). 
                So, it was<br/> alleged that Alameda held a position worth $5 <br/>billion in FTT (FTX native token).</div>







        </motion.div>






    )


}
export default Ftx4;