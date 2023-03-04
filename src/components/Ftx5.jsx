import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx5 = ()=>{
    const [move,setMove] = React.useState(false);
return(
    <div className="flex ml-10 mt-24">
        <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="siz text-[#ffff]   h-[432px]  font-normal">Now that Alameda’s investment <br/>foundation held so much FTT <br/>instead of a fiatcurrency or other <br/>cryptocurrency, 
            it triggered<br/> speculation across the industry<br/> about SBF and his companies’ <br/>undisclosed leverage and <br/>solvency.
            </motion.div>
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}   className="w-[388px] h-[388px] p-4 ml-60">
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