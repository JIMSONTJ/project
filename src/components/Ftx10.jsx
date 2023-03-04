import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const Ftx10 = ()=>{
    const [move,setMove] = React.useState(false);
    return(

        <div className="flex mt-32 ">

            <motion.div whileInView={{x: move ? -5:100}} transition={{delay:0.7}} className="w-[369px] h-[459px] ml-8">
                <Image
                src="/cir.png"
                alt=""
                width="369"
                height="459"
                />


            </motion.div>
            
            
            <motion.div whileInView={{x:  move ? 5 : -100}} transition={{delay:0.7}} className="text-[#ffff] ml-80 mt-3">
            <div className="w-[594px] h-[32px] font-sans text-2xl"><b>Sugar & spice with space for something nice</b></div>
            <div className="w-[594px] h-[448px] font-sans mt-4 text-2xl font-normal">
            <div>Amid this storm, some good news made its way<br/> in with decreasing interest rates in the US 
                after <br/>continuous weeks of rising. This further led to <br/>Inflation fears coming down. </div>

        <div className="mt-3">However, people’s trust in exchanges holding<br/> their crypto plummeted, 
        resulting in increased <br/>interest in non-custodial wallets like — Trust <br/>Wallet.</div>

        <div className="mt-3">With a lack of truth in crypto businesses, the<br/> angle of 
        Russia using the asset class to evade<br/> sanctions came up again.
         In light of this, the EU <br/>banned Russia's Crypto Assets and Transactions.</div>
        </div>
        </motion.div>




        </div>


    )


}
export default Ftx10;