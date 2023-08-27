import React from 'react'
import p1 from "../images/template-1.jpg"
import p2 from "../images/template-2.jpg"
import p3 from "../images/template-3.png"
import p4 from "../images/different-rice.jpg"
import "../styles/Slider.css";

function slider() {
  return (
    <body>
      <div class="slide-container">
          <div class="slides" >
            <img src={p1} class="active"/>
            <img src={p2}/>
            <img src={p3}/>
            <img src={p4}/>
          </div>

          <div class="buttons">
              <span class="next">&#10095;</span>
              <span class="prev">&#10094;</span>
          </div>

          <div class="dotsContainer">
              <div class="dot active" attr='0'></div>
              <div class="dot" attr='1'></div>
              <div class="dot" attr='2'></div>
              <div class="dot" attr='3'></div>
          </div>
      </div>
    </body>
    
  )
}

export default slider