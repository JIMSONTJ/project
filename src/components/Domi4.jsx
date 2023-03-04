import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi4 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

        <div className="flex  mt-32">
<motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className=" ">
<div className="ft text-[#fcbec6] font-normal">They fired, we hired</div>
<div className="text-[#ffff] mt-5 text-xl font-normal">Despite SBF’s so-called acquisitions by August, many crypto<br/> community members lost a lot.</div>

<div className="text-[#ffff] mt-4 text-xl font-normal">They say everyone should experience three pains in life that will <br/> mould them into who they will eventually become - </div>
<div className="text-[#ffff]  text-xl mt-4 font-normal">1.getting broken up with,
<br/>2.getting back-stabbed by a friend,
<br/>3.and getting fired.</div>

<div className="text-[#ffff] mt-4 text-xl font-normal">Well, we have faced it all now, so get ready for several up-and- <br/>coming success stories. 
    Just give us another month to look for <br/>a job, okay?</div>

<div className="text-[#ffff] mt-4 text-xl font-normal">Don’t get it?</div>

</motion.div>
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="  p-6 ml-72">
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