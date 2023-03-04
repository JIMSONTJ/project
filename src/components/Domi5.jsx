import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi5 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex mt-44 ">
<motion.div  whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="  mt-5 text-xl font-normal">
<div className="text-[#ffff] mt-4 ">After the Terra-Luna, 3AC, and Celsius tragedies, the crypto <br/> industry saw a
 drastic drop in volume, followed by a panic sell-off.<br/> This further led to 
 domino effect-like liquidation problems across<br/> crypto exchanges. 
 The firs step was laying off the workforce <br/>across departments in light of liquidation issues.</div>

<div className="text-[#ffff] mt-4 "><b>And due to the crypto crash, businesses actively <br/> began to lay off employees to cut costs.</b></div>
</motion.div>.
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}   className="w-[435px] h-[282px] p-8 ml-52 ">
    <Image
    src="/peo.png"
    alt=""
    width="435"
    height="282"
    
    
    
    />


</motion.div>






        </div>


    )


}
export default Domi5;