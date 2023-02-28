import React from "react";
import {motion} from "framer-motion";

const Ftx14 = ()=>{
    const [move,setMove] = React.useState(false);
    return(
        <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="mt-20 ml-48">
            <div className= " text-[#fcbec6] text-8xl  w-[952px] h-[208px] ml-2 ">Will 2023 be any<br/> better than 2022?</div>
            <div className="text-[#ffff] w-[820px] h-[240px] text-4xl font-sans ">We wish, we had the answers to all this,<br/> but we wrote this as an 
                ode to the<br/> #CryptoCommunity that goes out on<br/> Twitter,
                 day in and out, helps each other,<br/> and look out for each other. </div>






        </motion.div>






    )








}
export default Ftx14;