import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx5 = ()=>{
    const [move,setMove] = React.useState(false);
return(
    <div className="flex ml-20 mt-24">
        <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="text-[#ffff] text-4xl w-[614px] h-[432px] font-sans">Now that Alameda’s<br/> investment foundation held so<br/> much FTT instead of a fiat<br/>currency or other <br/>cryptocurrency, 
            it triggered<br/> speculation across the <br/>industry about SBF and his <br/>companies’ undisclosed <br/>leverage and solvency.
            </motion.div>
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}   className="w-[388px] h-[388px] p-8 ml-16">
<Image
src="/cas.png"
alt=""
width="388"
height="388"



/>



</motion.div>





    </div>







)







} 
export default Ftx5;