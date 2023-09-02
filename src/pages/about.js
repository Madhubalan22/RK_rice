import React from 'react'
import "../styles/about.css"
import Nav from '../components/Nav.js'
const about = () => {
  return (
    
    <div>
      <Nav/>
      <div className='about1'>
       <h1 className='about'>ABOUT US</h1>
       <p className='para'>
       At RK Rice Mill, our passion for perfection in rice processing has been the cornerstone of our success for decades. As a trusted name in the industry, we have consistently delivered premium quality rice products that have become a staple in households around the world. Our commitment to excellence, paired with state-of-the-art technology, has made us a leader in the field of rice processing.
       </p>
       <div className='rect'></div>
       <div className='rect1'></div>
       </div>

       <div class="container">
        <div class="half">Left Half</div>
        <div class="half1">Right Half</div>
    </div>

    </div>
  )
}

export default about