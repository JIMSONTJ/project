import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi8 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex mt-52 ml-56">
<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="text-[#ffff] font-sans w-[646px] h-[216px] mt-6">
<div>In September, when we were still sour from Green Day's callback, <br/>
    we made everyone wish that they someone would "Wake them<br/> up when September ended"</div>

<div className="mt-4"><b>In came the Russian wizard, Vitalik Buterin with the Ethereum <br/>Merge.</b> Although it was a pretty docile and well-thought-out <br/>event, 
on the darker and unfriendlier side of the Web 3.0 space, <br/>multiple got scammed to fork their ETH from the 1.0 version.</div>

</motion.div>
<motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="w-[302px] h-[372px] p-3 ml-10">
    <Image
    src="/ali.png"
    alt=""
    width="302"
    height="372"
    
    />




</motion.div>





        </div>






    )

}
export default Domi8;