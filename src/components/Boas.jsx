import React from "react";
import Image from "next/image";



const Boas = () => {

return(
<div >
    <div className='  text-[#ffffff] text-3xl w-[808px] h-[144px] mt-20 ml-10' >
A series of layoffs that started with<br/> Crypto.com’s 5% cut was followed by <br/>other companies, including</div>
<div className='flex   ml-60 p-1'>
    
<Image className=" p-1 w-[88px] h-[88px] mr-1 mt-1"
src="/emp.png"
alt=""
width="80"
height="40"
/>

<div className='  border-2 rounded-md flex items-center justify-center text-center align-middle w-64 h-22 mt-2 text-[45px] text-[#ffffff] '>BitOasis</div>
<div className='  ml-2 pt-8 p-1 w-[45px] h-[24px] text-[#ffffff] text-3xl'>5%</div>

</div>



</div>

)
}
export default Boas;


