 
 import {sliderData} from "./DataSlider"
import "./SliderSmall.css";
import {AiOutlineRight} from "react-icons/ai";
import {AiOutlineLeft} from "react-icons/ai"
import { useState } from 'react';
 import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
 
const SliderSmall = () => {
    const [currentIndex,setCurrentIndex]=useState(0)
    const sliderLeft=()=>{
         const isFirstSlider =currentIndex===0;
         const newIndex =isFirstSlider ?sliderData.length-1:currentIndex-1;
         setCurrentIndex(newIndex)
    }
    const sliderRight=()=>{
       const isLastSlide=currentIndex===sliderData.length-1;
       const newIndex=isLastSlide?0:currentIndex+1;
       setCurrentIndex(newIndex)
    }
 useEffect(()=>{
    Aos.init({duration:2000})
 },[])



  return (
    <div data-aos="fade-right" id="/content"> 
    <div className="MainSliderSmall"> 
    <i onClick={sliderLeft}  className='arrow-left'>
    <AiOutlineLeft/>
    </i>

    <i className='arrow-right' onClick={sliderRight}>
        <AiOutlineRight/>
    </i>
        

    <div id="slider" className='slidersmall'
    style={{backgroundImage:`url(${sliderData[currentIndex].image})`}}></div>
       

    <div className="textSliderSmall">
        <h1>Guidance through closing</h1>
        <p>Homepie is the only place you can go to manage your entire purchase/sale from an easy to use dashboard. The system is set up to make sure you meet all of your contractual obligations on time to ensure a smooth and easy closing.</p>
    </div>
  </div>
   </div>    
  
  )
}

export default SliderSmall