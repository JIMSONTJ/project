import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
const Domi9 = ()=>{
    const [move,setMove] = React.useState(false);

    return(
        <div className="flex mt-32 ">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[302px] h-[372px] p-4">
                <Image
                src="/jok.png"
                alt=""
                width="302"
                height="372"
                
                
                
                
                />

            </motion.div>

<motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className=" h-[116px] text-[#ffff]  ml-72 mt-32 text-xl">
        <div className="font-normal">Like the final boss in every game, here came the last quarter. The reason <br/>for chaos. As we write this,
             we know what happened just a few weeks<br/>ago and are unsure about what is next.</div>

<div className="text-2xl mt-5"><b>The time for SBF to truly reveal his colours.</b></div>

</motion.div>

        </div>









    )











}
export default Domi9;