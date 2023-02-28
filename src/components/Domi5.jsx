import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi5 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex ml-52 mt-44">
<motion.div  whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[562px] h-[240px] mt-5 ">
<div className="text-[#ffff] mt-4 font-sans">After the Terra-Luna, 3AC, and Celsius tragedies, the<br/> crypto industry saw a
 drastic drop in volume, followed <br/>by a panic sell-off. This further led to 
 domino effect-like <br/>liquidation problems across crypto exchanges. 
 The firs<br/> step was laying off the workforce across departments in <br/>light of liquidation issues.</div>

<div className="text-[#ffff] mt-4 font-sans "><b>And due to the crypto crash, businesses actively <br/> began to lay off employees to cut costs.</b></div>
</motion.div>.
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}   className="w-[435px] h-[282px] p-4 ml-10">
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