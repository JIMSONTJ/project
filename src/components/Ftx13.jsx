import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx13 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className=" flex mt-20 ml-10">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[428px] h-[508px] p-6">
                <Image
                src="/fog.png"
                alt=""
                width="428"
                height="508"
                
                
            
                />
            </motion.div>
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="ml-72 mt-14">
<div className="siz w-[465px] h-[96px] font-serif text-[#fcbec6] font-normal">Are We All Really <br/>Gonna Make It?</div>
<div className="si w-[578px] h-[280px] text-[#ffff] font-sans font-normal mt-6">
<div>In the beginning, we said one contagion stopped, and <br/>another began.
     Although, what if we now have to face <br/>several contagions simultaneously?</div>

<div className="mt-6">Will winter last another summer? Is the crypto<br/>  crash over,or has it just begun?</div>

<div className="mt-6">Do bear markets really make the rich richer? If<br/> that’s the case, how is it that so many mega-<br/>Alphas in space got wiped out?</div>
</div>
</motion.div>






       
       
        </div>








    
    )

}
export default Ftx13;