import React from "react";
import {motion} from "framer-motion";

const Domi7 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

<div>

<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}}  className="c h-[208px] text-[#fcbec6]  mt-32 font-normal ">Vitalik’s baby came<br/> before his boner.
</motion.div>



</div>




    )


}
export default Domi7;