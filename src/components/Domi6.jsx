import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Domi6 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
       
        <div className="flex ">
            <motion.div  whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[628px] h-[144px] text-[#ffff]  mt-56 p-4 text-xl font-normal"><b>When getting the lay of the land meant getting laid off, we <br/>went on a hiring spree.</b>We understood 
                that community<br/> members and employees got caught in the crossfire of the<br/>insolvent companies and ignorant rich dudes. And, 
                thus we <br/>accomplished our mission to become the LARGEST Web3 <br/>Marketing agency with 80+ Degens, Alphas and some Betas.
                </motion.div>
        
        <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}}  className="w-[357px] h-[452px] mt-28 p-4 mr-3 ml-72">
            <Image 
            src="/bea.png"
            alt=""
            width="357"
            height="452"
            
            
            
            />


        </motion.div>







        </div>






    )



}
export default Domi6;