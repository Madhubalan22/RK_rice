import React from 'react'
import "../styles/availability.css"
// import { Element } from 'react-scroll';
import basmati from "../images/basmati.jpg"
import redrice from "../images/redrice.jpg"
import ponni from "../images/ponni.jpg"
import blackrice from "../images/black.jpg"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpg"
import img10 from "../images/img10.jpg"
import img11 from "../images/img11.jpg"

const items = [
    { id: 1, imageUrl: basmati, text: 'Basmati Rice' },
    { id: 2, imageUrl: redrice,  text: 'Red Rice'},
    { id: 3, imageUrl: ponni,  text: 'Ponni Rice'},
    { id: 4, imageUrl: blackrice,  text: 'Black Rice' },
    // ... Add more items as needed
  ];

  const galery = [
    { id: 1, imageUrl:img1, text:'' },
    { id: 2, imageUrl: img2 ,  text: ''},
    { id: 3, imageUrl: img3,  text: ''},
    
    // ... Add more items as needed
  ];

  const machine = [
    { id: 4, imageUrl: img4,  text: '' },
    { id: 5, imageUrl: img5,  text: '' },
    { id: 6, imageUrl: img6,  text: '' },
    { id: 7, imageUrl: img7,  text: '' },
    { id: 8, imageUrl: img8,  text: '' },
    { id: 9, imageUrl: img9,  text: '' },
    { id: 10, imageUrl: img10 , text: '' },
    { id: 11, imageUrl: img11,  text: '' },
    
    // ... Add more items as needed
  ];

const availability = () => {
  return (
 <div className='whole'>
  <h1 className='available'> Rices Available</h1>
  

    <div className='grid-container'>
   
 {items.map(item => (
        <div key={item.id} className="grid-item">
           <img src={item.imageUrl}  alt={`Item ${item.id}`}/>
           <h3 className="image-text">{item.text}</h3>
        </div>
      ))}
     
    </div>
    <h1 className='available'>Gallery</h1><br></br>
    <p className='para'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

    <div className='grid-container'>
   
 {galery.map(item => (
        <div key={item.id} className="grid-item">
           <img src={item.imageUrl}  alt={`Item ${item.id}`}/>
           <h3 className="image-text">{item.text}</h3>
        </div>
      ))}
    </div>

    
    <p className='para'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>

    <div className='grid-container'> 
   {machine.map(item => (
          <div key={item.id} className="grid-item">
             <img src={item.imageUrl}  alt={`Item ${item.id}`}/>
             <h3 className="image-text">{item.text}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}

export default availability