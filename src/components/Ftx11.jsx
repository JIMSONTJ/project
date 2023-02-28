import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx11 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

        <div className="flex  ml-28">

            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[428px] h-[508px] p-10 mt-20">
                <Image
                src="/bir.png"
                alt=""
                width="428"
                height="508"
                />


            </motion.div>     
            <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="ml-44 mt-32 ">
            <div className="text-[#fcbec6] text-3xl w-[465px] h-[112px] mt-2">$SOL, $POL, and a<br/> brawl to recall</div>
                <div className="text-[#ffff] w-[578px] h-[280px] font-sans">
            <div>So, this advocate of a “half-baked L1”, oh, we mean <br/>Solana, totally bashed 
                Polygon accusing the team pays <br/>developers to build on Polygon (sick burn or paranoia?)</div>

            <div className="mt-5">Mert Mumtaz, co-founder and CEO of Helius, a Solana <br/>infrastructure application, 
            tweeted harsh remarks against<br/> Polygon. This came after Polygon received more than<br/> $130 million 
            in funding compared to Solana. No, money <br/>doesn’t change anything (except our mood).
            </div>
            </div>
            </motion.div>
            
            


            </div>


)


}
export default Ftx11;