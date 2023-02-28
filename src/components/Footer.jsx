import React,{useState,useMemo} from "react";
import Scrol from "./Scrol";
import Firs from "./Firs"
import { useWindowScroll } from "react-use";
export default function Footer(props) {

    const [scrolled,setScrolled] = useState(false);
    const {y} = useWindowScroll();
    useMemo(() => {
        if (y > 1090){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    },[y]);

    return(
        <>
        { scrolled &&
        <div className="  ">
            <div className="">
                
                <Scrol/>

            </div>
        </div>

 }
         
        </>

    )

}