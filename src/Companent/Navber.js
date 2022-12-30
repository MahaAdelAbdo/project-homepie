 import React,{useState} from 'react'
 
 import {Link} from "react-scroll"
 import {FaBars} from "react-icons/fa"
 import {VscChromeClose} from "react-icons/vsc"
 import "./Navber.css"
 const Navber = () => {
 const [bar, setBar]=useState(true)
 
    const handleClick =()=>{
      setBar(!bar)
    }
      
   return (
     <div className='navber'> 
     
     <img src="https://homepie.com/images/logo/logo@2x-452ce325ab19198056498ee8664608e6.png?vsn=d" alt="logo" />
    
  
    
    <ul className={bar ?"navberUl active":"navberUl"} >
        <li><Link  to="/" spy={true} smooth={true} offset={80} duration={500} onClick={handleClick} >Home</Link></li>
       
        <li><Link to="/about" onClick={handleClick}   spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
         <li><Link to="/content" onClick={handleClick}   spy={true} smooth={true} offset={50} duration={500}>Content</Link></li>
         <li><Link to="/Card" onClick={handleClick}    spy={true} smooth={true} offset={-70} duration={500}>Card</Link></li>
        <li><Link to="/loginIn"  onClick={handleClick}   spy={true} smooth={true} offset={50} duration={500}>Login in </Link></li>
           <li><Link to="/way" onClick={handleClick} spy={true} smooth={true} offset={40} duration={500}>way</Link></li>
          <li><Link to="/Footer" onClick={handleClick}    spy={true} smooth={true} offset={80} duration={500}>Footer </Link></li>
    </ul>
     <div onClick={handleClick} className='hambarger'>
      {bar?<FaBars/>:<VscChromeClose/>}
     </div>
     </div>
   )
 }
 
 export default Navber