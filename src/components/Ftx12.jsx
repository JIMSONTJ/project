import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx12 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        
        <div className="flex  mt-32">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="text-[#ffff] font-sans w-[680px] h-[408px] text-xl ml-10 font-normal">

<div>So after this guy said his peace, Polygon co-founder Sandeep <br/>
Nailwal chose violence with comebacks more hurtful than those<br/>
 performance review emails from our managers.<b>Polygon co-<br/>founder 
 didn’t just point out Solana’s downtime issues; he also <br/>asserted 
 that everyone wants to build on Ethereum, and Polygon<br/> facilitates 
 a more efficient way in, unlike Solana.</b> </div>

<div className="mt-4">It’s like high school all over again, and we are not complaining.</div>

<div className="mt-4">Okay, but we will not drag it as these guys did, and we will end 
with<br/> the news of how even the dark horse of NFTs moved to Polygon <br/>recently.
 The NFT project, DeGods and Y00ts, also announced that <br/>DeGods would be bridging to Ethereum,
  and Y00ts would then <br/>bridge to the Polygon.</div>

<div className="mt-4"><b>Sorry Solana, even we didn’t see that coming.</b></div>


</motion.div>

<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="w-[371px] h-[440px] p-4 ml-52">
<Image
src="/mout.png"
alt=""
width="371"
height="440"

/>

</motion.div>






    </div>






    )






}
export default Ftx12;