import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi4 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

        <div className="flex ml-40 mt-32">
<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[651px] h-[416px]">
<div className="text-[#fcbec6] text-xl font-serif">They fired, we hired</div>
<div className="text-[#ffff] mt-5">Despite SBF’s so-called acquisitions by August, many crypto<br/> community members lost a lot.</div>

<div className="text-[#ffff] mt-4">They say everyone should experience three pains in life that will <br/> mould them into who they will eventually become - </div>
<div className="text-[#ffff] ml-3">1.getting broken up with,
<br/>2.getting back-stabbed by a friend,
<br/>3.and getting fired.</div>

<div className="text-[#ffff] mt-4">Well, we have faced it all now, so get ready for several up-and- <br/>coming success stories. 
    Just give us another month to look for a<br/> job, okay?</div>

<div className="text-[#ffff] mt-4">Don’t get it?</div>

</motion.div>
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[380px] h-[396px] p-8 ml-10">
<Image
src="/sec.png"
alt=""
width="380"
height="396"


/>


</motion.div>





        </div>







    )










}
export default Domi4;