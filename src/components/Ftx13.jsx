import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx13 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <div className="flex mt-20 ml-20">
            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[428px] h-[508px] p-8">
                <Image
                src="/fog.png"
                alt=""
                width="428"
                height="508"
                
                
            
                />
            </motion.div>
<motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="ml-56 mt-14">
<div className="w-[465px] h-[96px] text-3xl font-serif text-[#fcbec6]">Are We All Really <br/>Gonna Make It?</div>
<div className="w-[578px] h-[280px] text-[#ffff] font-sans">
<div>In the beginning, we said one contagion stopped, and <br/>another began.
     Although, what if we now have to face <br/>several contagions simultaneously?</div>

<div className="mt-4">Will winter last another summer? Is the crypto crash over,<br/> or has it just begun?</div>

<div className="mt-4">Do bear markets really make the rich richer? If that’s the<br/> case, how is it that so many mega-Alphas in space got <br/>wiped out?</div>
</div>
</motion.div>






       
       
        </div>








    
    )

}
export default Ftx13;