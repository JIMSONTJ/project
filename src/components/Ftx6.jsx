import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
const Ftx6 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="ml-44 mt-24">
            <div className="text-[#fcbec6] text-8xl font-serif">CZ didn’t take it eazy</div>
            
            <div className="flex ">
            < motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="text-[#fff] text-4xl w-[524px] h-[384px] font-sans mt-8 ml-4">The rumours were further<br/> escalated when Binance,<br/> the world’s biggest crypto<br/> exchange, 
                declared the<br/> sale of its entire position <br/>in FTT tokens—roughly 23<br/> million FTT tokens worth <br/>about $529 million.
                </motion.div>
            <motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="w-[388px] h-[388px] mt-5 p-8 ml-16">
            <Image
            src="/ako.png"
            alt=""
            width="388"
            height="388"
            />
        </motion.div>

            
            
            </div>







        </div>







    )







}
export default Ftx6;