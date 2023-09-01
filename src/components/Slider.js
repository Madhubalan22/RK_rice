import React from 'react'
import data from '../images/Imagedata'
import "../styles/Slider.css"

function Slider(props) {
   const slide=data.map((d,index)=>{
      return <div key={index} className={index===props.slideIndex ?"myslides fade":"myslidesnone"}>
        <img  className='slider' src={d.src} alt={d.caption}/>
        <div className="text">{d.caption}</div>
      </div>
   })
  return slide;
}

export default Slider;
