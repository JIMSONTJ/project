import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx2 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

        <div className="flex  ml-44">
<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="text-[#ffff] w-[594px]  h-[224px] font-sans text-xl ml-10 mt-32">
<div >It had two reel life friends (real-life frenemies).<br/> While one was 
    a hardcore businessman, the<br/> other was slightly more philanthropic.
     However, it<br/> is every Harry Potter character twist ever —
     the <br/>one they were sure was the bad guy (because he<br/>was always so cold), turned out to be the nicer<br/> one.</div>

<div className="w-[594px] h-[96px] text-3xl mt-5">Yes, we are referring to <br/>Binance’s CZ and FTX’s SBF.</div>
</motion.div>

<motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[419px] h-[419px] p-10 mt-20 ml-10">
<Image

src="/tmen.png"
        alt=""
        width="419"
        height="419"
        


/>


</motion.div>



        </div>



    )
}
export default Ftx2;