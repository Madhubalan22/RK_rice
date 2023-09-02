import React from 'react'
import "../styles/about.css"
import Nav from '../components/Nav.js'
import img5 from "../images/owner.png"
const about = () => {
  return (
    
    <div>
      <Nav/>
      <div className='about1'>
       <h1 className='about'>ABOUT US</h1>
       <p className='para'>
       At RK Rice Mill, our passion for perfection in rice processing has been the cornerstone of our success for decades. As a trusted name in the industry, we have consistently delivered premium quality rice products that have become a staple in households around the world. Our commitment to excellence, paired with state-of-the-art technology, has made us a leader in the field of rice processing.
       </p>
       <div className='aboutwhole' >
        
       <div className='imageabout'>
       <img className='imageabout1' src={img5}></img>
       <div className='frame'>
       </div>
       </div>
       </div>
       </div>

       <div class="container">
        <div class="half">
          <div className='box'>
            <h1 style={{color:"white"}}>FROM TAMIL NADU TO INDIA</h1>
            <br></br>
            <p className='bp'>
            Certainly, here's another paragraph:

"Ponni rice, with its aromatic allure and delicate flavor, has captured the hearts and palates of people worldwide. Its origins trace back to the lush fields of India, where the unique combination of soil, climate, and expertise gives rise to the finest Basmati grains. Whether you're preparing a hearty biryani or a simple pilaf, Basmati rice elevates every dish to a culinary masterpiece. 
              </p>
          </div>
        </div>
        <div class="half1">
        <div className='box'>
            <h1 style={{color:"black"}}>QUALITY IS OUR TRADITION</h1>
            <br></br>
            <p className='bp1'>
              At the heart of our success is our unwavering dedication to quality. We understand that rice is not just a staple food; it's an integral part of every meal, and its quality matters. That's why, for generations, RK Rice Mill has been synonymous with exceptional rice products. We adhere to stringent quality control measures at every step of the processing journey to ensure that only the finest grains make it to your table.
              </p>
          </div>
        </div>

        
    </div>
<div>
          <h1 className='val1'>OUR SERVICES IS BASED ON FOLLOWING VALUES </h1>
          <h2 className='val2'><strong>#</strong>ForAHealthyFuture</h2>

        </div>
    </div>
  )
}

export default about