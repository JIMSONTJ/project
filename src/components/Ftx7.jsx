import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx7 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="text-[#ffff]  h-[376] ml-10 mt-36 text-2xl font-normal">
            <div>Following this, Binance even backed out of its potential<br/>deal with
                 FTX of buying portions of the company. This<br/> action caused several 
                 users to withdraw from FTX, <br/>amounting to approximately $6 billion in funds.</div>
 <div className="mt-8">After CZ sold FTT, SBF’s then-valuation of about<br/> $15.2 billion came down 
 to a few million to $991.5 <br/> million, which is approximately a 94% drop.</div>
<div className="mt-6"><b>Guess who had a great fall? Indeed, not HUMPTY<br/> DUMPTY</b></div>
</motion.div>
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="w-[354px] h-[420px] p-6 mt-24 ml-64">
<Image
src="/gra.png"
alt=""
width="354"
height="420"
/>



</motion.div>






        </div>







    )






}
export default Ftx7;