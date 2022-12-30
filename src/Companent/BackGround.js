import React from 'react'
import "./BackGround.css"
import{Grid} from "@material-ui/core"
const BackGround = () => {
  return (
    <div className='background'id="/">
          <Grid item xs={10} md={8}> 
        <h1>Be your own agent</h1>
        <h3>Save thousands Use our innovative technology
        to walk you step-by-step through the
        home buying and selling process</h3>
        
        <div className='Button_Two'>
           <a href="/">buying</a>
        <a href="/">selling</a>
        </div>
 
        </Grid>
        
    </div>
  )
}

export default BackGround