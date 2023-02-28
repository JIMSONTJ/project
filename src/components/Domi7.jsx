import React from "react";
import {motion} from "framer-motion";

const Domi7 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

<div>

<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}}  className="w-[895px] h-[208px] text-[#fcbec6] text-8xl mt-32 ml-32 font-serif">Vitalik’s baby came<br/> before his boner.
</motion.div>



</div>




    )


}
export default Domi7;