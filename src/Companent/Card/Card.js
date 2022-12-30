import React from 'react'
import {CardContent} from "@material-ui/core"
import "./Card.css"
const Card = () => {
  return (
    <div className='Card' id="/Card">
      <div className='Card-text'>
        <h1>Homepie makes it easy to sell your own home.</h1>
        <h3>No hassle, no worry features</h3>
      </div>
     <div  className='Grid'  >
    <div className='child-Grid'>
      <CardContent  className='child-Grid'> 
      <div className="heading"> 
      <img src="https://homepie.com/images/home-page/protection-631d7aec347337db2287c388903d4d8b.png?vsn=d"/>
        <h3>Protection</h3>
        </div>

      <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
         <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
          <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
         <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div> 
  
        
        </CardContent>
        </div>


          <div  className='child-Grid'    >
         <CardContent  className='child-Grid'> 
      <div className="heading"> 
      <img src="https://homepie.com/images/home-page/hammor-af19941fbd6327a9ec43055fca696784.png?vsn=d"/>
        <h3>Pro tools</h3>
        </div>
     
           <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
         <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
         <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
         <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
            </CardContent> 
        </div>

          <div >
      <CardContent  className='child-Grid'> 
      <div className=" 
      heading headingThree"> 
      <img   style={{marginLeft:" .7rem"}} src="https://homepie.com/images/home-page/earphone-a51501b3b4f1cad094c95171a9fd7256.png?vsn=d"/>
        <h3>Real Support</h3>
        </div>
      <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
         <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
         <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
         <div className='table'>
      <i class="fa-solid fa-check"></i>
      <p>digital purchase contract</p>
      </div>
      
            </CardContent> 
        </div>
      </div>
    </div>
  )
}

export default Card