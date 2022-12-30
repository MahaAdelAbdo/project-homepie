import React from 'react'
import "./LargeFooter.css"
 
const LargeFooter = () => {
  return (
     
 
 <div id="/Footer"> 
        <div className='smallFooter'>
        <img src="https://homepie.com/images/reviewsio-logo-6a3821eb8a46526a404c5c1b13c6bc76.png?vsn=d" className="reviewsio"/>
        <img src="https://homepie.com/images/market-watch-6b9f4620cfe71a0132138f67a2685c58.png?vsn=d" className="marketwatch"/>
          <img src="https://homepie.com/images/reviewsio-logo-6a3821eb8a46526a404c5c1b13c6bc76.png?vsn=d" className="reviewsio"/>
        <img src="https://homepie.com/images/market-watch-6b9f4620cfe71a0132138f67a2685c58.png?vsn=d" className="marketwatch"/>
      
        </div>
        <div className='LargeFooter' >
        <div className='logoGrid'>
        <a href="/"><i className="fa-brands fa-facebook"></i></a> 
        <a href="/"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="/">
        <i className="fa-brands fa-twitter"></i></a> 
        <a href="/"> <i class="fa-brands fa-instagram"></i></a>
                
            </div>
            <div className='TextGrid'>
                <a href="/">Sell a home</a>
                <a href="/">Buy a home</a>
                <a href="/">Pricing</a>
                <a href="/">Agents</a>
            </div>
            {/* grid link */}
            <div className='text_ten'>
                <a href="/"> How it works</a>
                <a href="/">CA Purchase Contract</a>
                <a href="/">List On MLS</a>
                <a href="/">Store</a>
                <a href="/">Transaction Coordination</a>
                <a href="/">FAQ</a>
                <a href="/">Home Value Estimator</a>
                <a href="/">Blog </a>
                <a href="/">Support</a>
                <a href="/">Press</a>
            </div>
            <div className='imageFooter'>
                <img src="https://homepie.com/images/logo/logo-dark-8ee31e8d6f94f748cf2fe497f9d05924.png?vsn=d" alt="" />
            </div>
            <div className='textFooter' >
                © 2020 - 2022 Homepie®, Inc. All Rights Reserved.
            </div>
            <div className='endFooter'>
                <p>Homepie® is a California licensed real estate brokerage offering Limited-Service Multiple Listing Service (MLS) Entry-Only listings to homeowners for the sole purpose of displaying homeowners’ listings across the web using listing syndication feeds offered by MLSs. Homepie, Inc. does not represent any homeowners as their full-service listing broker or any users. All featured properties are offered for sale directly by homeowners. Homepie, Inc. makes no representations, warranties or assurance of any kind whatsoever concerning the accuracy of information about the properties. Homepie, Inc. CA DRE Lic </p>
            </div>
        </div>
  
 
 
    </div>
  )
}

export default LargeFooter
 