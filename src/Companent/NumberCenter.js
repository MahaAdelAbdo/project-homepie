 import React, { useEffect } from 'react'
 import "./NumberCenter.css"
 import Aos from "aos";
 import "aos/dist/aos.css"
 const NumberCenter = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
   return (
     <div className='NumberCenter' id="/way">
      <div data-aos="fade-right"> 
      <div className='cornerFrist'> 
      <div className='imageFrist'>
            <img src="https://homepie.com/images/home-page/step1-2137a16dce703c923dc03315c3171b85.png?vsn=d" alt="" />
            
      </div>
    
 
      <div className='textFrist'>
        <h1>Simple listing process</h1>
        <p>List your home in just a few minutes. Choose the options that are right for your situation including a- la-carte or bundled packages for important services such as professional photography,
        MLS listing,
        social media marketing,
        lockboxes,
        and more.</p>
      </div>
      </div> 
      </div>
      {/* second */}
      <div data-aos="fade-left"> 
            <div className='cornersecond'> 
      <div className='textSecond'>
        <h1>  Guidance through closing </h1>
        <p> Homepie is the only place you can go to manage your entire purchase/sale from an easy to use dashboard. The system is set up to make sure you meet all of your contractual obligations on time to ensure a smooth and easy closing.</p>
      </div>
   
 
      <div className='imageSecond'>
           <img src="https://homepie.com/images/home-page/step2-e992724d03e6f59a76152ba9a9cc452c.png?vsn=d" alt="" />
            
      </div>
      </div>
      </div>  
      
       </div>
   )
 }
 
 export default NumberCenter