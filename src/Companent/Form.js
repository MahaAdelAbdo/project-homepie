import React, { useRef, useState } from 'react';
import "./Form.css"
import emailjs from '@emailjs/browser';
import {BsPersonFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
const Result =()=>{
   return(
    <p>your message has been succesfully sent. i will contact you soon</p>

   )
}
 
const BackFrom = (props) => {
  const [result ,setResult]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dodnrfp', 'template_s34hqd6', form.current, 'k_aKK1XurgVQ9JfPY')
      .then((result) => {
          console.log(result.text);
          console.log("it is working")
      }, (error) => {
          console.log(error.text);
          console.log("u have")
      });
      e.target.reset()
      setResult(true)
    };
    setTimeout(()=>{
       setResult(false)
    },3000)

 
  return (
    <div className='BackFrom' id='/loginIn' >
      
    <div className='loginIn'>
        <form  ref={form} onSubmit={sendEmail} >
        <div className='titleForm'>
            <h1>welcome back</h1>
            <h5>login in continue</h5>
        </div>
            <h3>name</h3>
          <div>
            <span><BsPersonFill/></span>
            <input type="name"name="to_name"   />
          </div>
                <h3> email</h3>
              <div>
            <span><MdEmail/></span>
            <input type="email"name="from_name" />
              </div>


            <div className="textarea">
              <h4> message</h4>
              <textarea name="message" rows="10" />
            </div>

           <div className='result'> 
            {result?<Result/>:null}
            </div>



            <div className='buttonFrom'>
            <input id="Input" type="submit" value="Send" variant="contained"/>
            </div>
          
        </form>
    </div>
    </div>
  )
}

export default BackFrom