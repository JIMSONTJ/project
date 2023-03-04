import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import {motion} from "framer-motion"


const Chapn = ()=> {
    const [move,setMove] = React.useState(false);

    return(
            
   
               
            
            <div  className='text-[#ffffff] flex '>
        <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className=''>
<h2 className='text-[#fcbec6] font-normal text-xl '>Chapter 2</h2>
<h1 className='fou mt-5 font-normal'>Where Things Got ‘Interest’ing</h1>
<div className=' mt-5 text-xl font-normal ' >The COVID contagion had subsided but guess we weren’t
<br/>ready for peace yet. So, global economies began to <br/>
 shake, and we got weak in the knees (not the good kind).</div>

<div className='mt-5 text-xl font-normal'>Due to the Ukraine-Russia war that began in Q1, and<br/>
 supply shocks from China, Powell felt we needed to make<br/>
 
  the world poorer.</div>
  </motion.div>
            
         
  <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="w-[332px] h-[394px] p-4 ml-72 mt-4">
           <Image className="ml-10"
            src="/recta.png"
            alt=""
            width="332"
            height="394"
            
            />
            </motion.div>
           
        </div>


    )


}
export default Chapn;