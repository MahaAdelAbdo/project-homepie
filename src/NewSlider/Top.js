 import React from 'react'
 import "../App.css"
 import {Button} from "@material-ui/core"
 const Top = () => {
    const top =()=>{
        window.scrollTo(0,0)
    }
   return (

     <div className='TopScroll'>
        <Button onClick={top}><i className="fa-solid fa-arrow-up"></i></Button>
     </div>
   )
 }
 
 export default Top