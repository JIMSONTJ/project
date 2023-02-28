import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
const Domi9 = ()=>{
    const [move,setMove] = React.useState(false);

    return(
        <div className="flex mt-32 ml-44">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[302px] h-[372px] p-6">
                <Image
                src="/jok.png"
                alt=""
                width="302"
                height="372"
                
                
                
                
                />

            </motion.div>

<motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="w-[733px] h-[116px] text-[#ffff] font-sans ml-48 mt-32">
        <div>Like the final boss in every game, here came the last quarter. The reason <br/>for chaos. As we write this,
             we know what happened just a few weeks ago<br/> and are unsure about what is next.</div>

<div className="text-[22px]"><b>The time for SBF to truly reveal his colours.</b></div>

</motion.div>

        </div>









    )











}
export default Domi9;