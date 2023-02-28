import React from "react";
import Footer from "./Footer";

const Layout=({children}) => {

return(

<div
        style={{
          background:`url("${process.env.basePath}/media/fram.png")`, 
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "100vw 100vh",
        }}
        className="md:block hidden"
      >
        
      
        <div style={{ overflowX: "hidden" }}>{children} </div>
        <Footer />
      </div>
)
    }
    export default Layout;