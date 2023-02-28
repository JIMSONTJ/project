import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"
const Skel = () =>{
    const [move,setMove] = React.useState(false);
 
    return(

<div>


<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className='noto container font-normal w-[594px] h-[288px] text-[#fcbec6] text-7xl ml-10 mt-24 '>They said,<br/> “have an <br/> ‘Ape’ year!”  </motion.div>
<div className="ml-40">
<div className='grid  grid-cols-3 ml-80 mt-10 pl-4  pr-5 w-20 col-span-2'>
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className= ' container p-1 font-normal col-span-2  w-[437px] h-[160px] text-[#ffffff]   text-4xl -my-80 ml-56 pl-2'> By this quarter, the <br/>volume on NFT  trades  
<br/>dropped by a <br/>staggering 90%.  </motion.div>


<motion.div  whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className='w-[401px] h-[266px] col-span-2 ml-40 pr-2 p-4'>
<Image className='container -my-40 pr-10 ml-12 p-3 pl-2 '
src="/skel.png"
alt=""
width="401"
height="266"


/>

</motion.div>

</div>

</div>
</div>

)

}
export default Skel;