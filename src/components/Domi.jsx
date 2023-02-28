import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi = ()=> {
    const [move,setMove] = React.useState(false);
return(
    <div className="flex mt-20">
<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}}   className="text-[#ffff] ml-10">
<div className="text-[#fcbec6] ml-4 ">Chapter 3</div>
<div className="text-xl w-[365px] h-[56px] ml-4"> The Domino Starts</div>
<div className="w-[768px] h-[336px]">
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

<motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[287px] h-[347px] mt-10 p-4 ml-10">
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