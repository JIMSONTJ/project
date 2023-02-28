import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import {motion} from "framer-motion"


const Chapn = ()=> {
    const [move,setMove] = React.useState(false);

    return(
            
   
               
            
            <div  className='text-[#ffffff] flex justify-between px-10 pb-20 pl-5'>
        <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className='p-10'>
<h2 className='text-[#eb7575] pl-3'>Chapter 2</h2>
<h1 className='text-xl p-4'>Where Things Got ‘Interest’ing</h1>
<div className=' p-4 ' >The COVID contagion had subsided but guess we weren’t
<br/>ready for peace yet. So, global economies began to <br/>
 shake, and we got weak in the knees (not the good kind).</div>

<div className='p-3'>Due to the Ukraine-Russia war that began in Q1, and<br/>
 supply shocks from China, Powell felt we needed to make<br/>
 
  the world poorer.</div>
  </motion.div>
            
         
  <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="flex justify-items-end p-8">
           <Image 
            src="/recta.png"
            alt=""
            width="400"
            height="20"
            
            />
            </motion.div>
           
        </div>


    )


}
export default Chapn;