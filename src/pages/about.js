import React from 'react'
import "../styles/about.css"
import Nav from '../components/Nav.js'
import img5 from "../images/owner.png"
const about = () => {
  return (
    
    <div>
      
      <div id='about1'>
       <h1 id='about'>ABOUT US</h1>
       <p id='para'>
       Established in 1996 by the visionary couple, Mr. Rajendran and Mrs. Kanthammal, RK Rice Mill has evolved into a trusted name in rice processing, marked by its unwavering commitment to delivering premium-quality rice products worldwide. From its humble beginnings reliant on manual labor, the mill has undergone a remarkable transformation, now boasting a fully automated facility equipped with specialized machinery for color sorting, husk separation, rice enrichment, and advanced heating systems. Through this journey, our focus on customer satisfaction has remained central, recognizing that our customers are the heart of our success. As we continue to innovate and uphold the highest standards of excellence, RK Rice Mill invites you to be part of a legacy that redefines quality and flavor in every grain of rice.
       </p>
       <div id='aboutwhole' >
        
       <div id='imageabout'>
       {/* <img id='imageabout1' src={img5}></img> */}
       <div >
       </div>
       </div>
       </div>
       </div>

       <div id="container">
        <div id="half">
          <div id='box'>
            <h1 style={{color:"white"}}>FROM TAMIL NADU TO INDIA</h1>
            <br></br>
            <p id='bp'>
            Certainly, here's another paragraph:

"Ponni rice, with its aromatic allure and delicate flavor, has captured the hearts and palates of people worldwide. Its origins trace back to the lush fields of India, where the unique combination of soil, climate, and expertise gives rise to the finest Basmati grains. Whether you're preparing a hearty biryani or a simple pilaf, Basmati rice elevates every dish to a culinary masterpiece. 
              </p>
          </div>
        </div>
        <div id="half1">
        <div id='box'>
            <h1 style={{color:"black"}}>QUALITY IS OUR TRADITION</h1>
            <br></br>
            <p id='bp1'>
              At the heart of our success is our unwavering dedication to quality. We understand that rice is not just a staple food; it's an integral part of every meal, and its quality matters. That's why, for generations, RK Rice Mill has been synonymous with exceptional rice products. We adhere to stringent quality control measures at every step of the processing journey to ensure that only the finest grains make it to your table.
              </p>
          </div>
        </div>

        
    </div>
<div>
          <h1 id='val1'>OUR SERVICES IS BASED ON FOLLOWING VALUES </h1>
          <h2 id='val2'><strong>#</strong>ForAHealthyFuture</h2>

        </div>
    </div>
  )
}

export default about