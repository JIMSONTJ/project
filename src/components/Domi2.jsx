import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi2 = () =>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex ml-40 mt-20">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}}  className="">

            <div className="text-[#fcbec6] text-3xl w-[618px] h-[56px] font-serif">Let’s talk about CEX, Baby! </div>
            <div className="text-[#ffff]">
            <div className="w-[594px] h-[96px] text-xl"> By now, we are all just relying on hail marys to get <br/> us through 
                the bitter-cold winter that hit us<br/> during the summers.</div>
            <div className="w-[594px] h-[192px]">
            <div>The aftermath of the heated summer started with Voyager<br/> suspending withdrawal, 
                deposits and trading — the literal <br/>core of their project. And then, the giant filed for Chapter 11 <br/>Bankruptcy.</div>

            <div className="mt-5">Following this, another company came out clear about its <br/>losses. Blockchain.com announced a loss of 
            over $270 <br/>million from the Three Arrows Capital loan. </div></div>

            </div>
            </motion.div>
            <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="w-[387px] h-[404px] p-5 ml-20">
                <Image
                src="/rob.png"
                alt=""
                width="387"
                height="404"
                
                
                />


            </motion.div>








        </div>






    )

}
export default Domi2;