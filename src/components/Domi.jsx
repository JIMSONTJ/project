import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi = ()=> {
    const [move,setMove] = React.useState(false);
return(
    <div className="flex mt-20">
<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}}   className="text-[#ffff] ">
<div className="text-[#fcbec6] text-xl font-normal">Chapter 3</div>
<div className="fou  w-[365px] h-[56px] font-normal mt-5 "> The Domino Starts</div>
<div className="w-[768px] h-[336px] text-xl font-normal mt-5">
<div> 3AC and Celsius collapsing and declaring Bankruptcy; 
    it became harder<br/> than ever to tell your crypto-oblivious friend why this was the place to be.</div>

<div className="mt-5">3AC was linked to major liquidation, bringing the grandfather of the tokens, <br/>Bitcoin, to its
 knees with a whooping $17,500. Keep in mind that just merely 8<br/>months ago, Bitcoin witnessed its ATH.</div>

<div className="mt-5">By the end of this turbulent series of events, we realised that inflation had <br/>gotten, and the
 consistent CPI rise further caused more turmoil.<br/>
The economic collapse in the UK continued, which eventually caused Boris <br/>Johnson to quit, 
followed by Liz Truss to quit 45 days after, and the overall<br/>
 crypto narrative in the EU went sour (too much salt for our liking) </div>
 </div>
</motion.div>

<motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[287px] h-[347px] mt-28 p-2 ml-72">
<Image
src="/squ.png"
alt=""
width="287"
height="347"

/>

</motion.div>




    </div>


)

}
export default Domi;