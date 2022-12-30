import React from 'react'
import {Grid,Button} from "@material-ui/core"
import "./About.css"
 

const About = () => {
  return (
    <div className='About' id="/about">
    <div>
    <img src="https://www.shutterstock.com/image-vector/vector-illustration-cool-detailed-house-260nw-90032770.jpg" alt="phote" />
    </div>
    <div  className='praghph'  xs={4} >
    <h1>For Sale By Owner, Reinvented!</h1>
    <h2><i class="fa-solid fa-check"></i>Save tens of thousands in fees</h2>
    <h2><i class="fa-solid fa-check"></i>Legal Protection Paperwork</h2>
    <h2><i class="fa-solid fa-check"></i>Live Support from Real People  </h2>
    <h2><i class="fa-solid fa-check"></i>Assisted task management</h2>
    <Button><to href='/'>Assisted task management</to>
    </Button>
    <p></p>
    </div>
 
 
    </div>
  )
}

export default About