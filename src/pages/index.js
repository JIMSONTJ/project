import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Anim from '@/components/Anim';
import Chap from '@/components/Chap';
import Bar from '@/components/Bar';
import Firs from '@/components/Firs';
import Chap1 from '@/components/Chap1';
import Chap1in from '@/components/Chap1in';
import Scrol from '@/components/Scrol';
import Chapn from '@/components/Chapn';
import Skel from '@/components/Skel';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Domi from '@/components/Domi';
import Domi2 from '@/components/Domi2';
import Domi3 from '@/components/Domi3';
import Domi4 from '@/components/Domi4';
import Domi5 from '@/components/Domi5';
import Domi6 from '@/components/Domi6';
import Domi7 from '@/components/Domi7';
import Domi8 from '@/components/Domi8';
import Domi9 from '@/components/Domi9';
import Ftx1 from '@/components/Ftx1';
import Ftx2 from '@/components/Ftx2';
import Ftx3 from '@/components/Ftx3';
import Ftx4 from '@/components/Ftx4';
import Ftx5 from '@/components/Ftx5';
import Ftx6 from '@/components/Ftx6';
import Ftx7 from '@/components/Ftx7';
import Ftx8 from '@/components/Ftx8';
import Ftx9 from '@/components/Ftx9';
import Ftx10 from '@/components/Ftx10';
import Ftx11 from '@/components/Ftx11';
import Ftx12 from '@/components/Ftx12';
import Ftx13 from '@/components/Ftx13';
import Ftx14 from '@/components/Ftx14';
import Map from '@/components/Map';
import Chap3 from '@/components/Chap3';
import Chap4 from '@/components/Chap4';




import { useState,useEffect } from 'react';
import Layout from '@/components/Layout';







export default function Home() {
  const[loading,setLoading] = useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5800)
    }
  ,[])
  return (
    
    <>
    <div>
    {
        loading ?
        <Bar/>
        
        :
       

       <div> 
        
   
   
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Layout>
      
      <Firs />
       <Chap1/>
<Chap1in/>
<Chap/>
<Chapn/>
<Anim/>
<Skel/>
<Chap3/>
<Domi/>
<Domi2/>
<Domi3/>
<Domi4/>
<Domi5/>
<Domi6/>
<Domi7/>
<Domi8/>
<Domi9/>
<Chap4/>
<Ftx1/>
<Ftx2/>
<Ftx3/>
<Ftx4/>
<Ftx5/>
<Ftx6/>
<Ftx7/>
<Ftx8/>
<Ftx9/>
<Ftx10/>
<Ftx11/>
<Ftx12/>
<Ftx13/>
<Ftx14/>
        
        
     

</Layout>

       </div>
       
       }
      
      </div>
      
      </>
  )
}