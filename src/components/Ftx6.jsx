import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
const Ftx6 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className=" mt-24 ml-20">
            <div className="c text-[#fcbec6]  font-serif ml-36 font-normal">CZ didn’t take it eazy</div>
            
            <div className="flex ">
            < motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="siz text-[#fff]  w-[524px] h-[384px]  mt-8 font-normal">The rumours were further<br/> escalated when Binance,<br/> the world’s biggest crypto<br/> exchange, 
                declared the<br/> sale of its entire position <br/>in FTT tokens—roughly 23<br/> million FTT tokens worth <br/>about $529 million.
                </motion.div>
            <motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="w-[388px] h-[388px] mt-5 p-8 ml-56">
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