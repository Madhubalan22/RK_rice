import React from 'react'
import "../styles/service.css"
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
    
    
    // ... Add more items as needed
  ];
  const fact=[
    { id: 7, imageUrl: img7,  text: '' },
    { id: 8, imageUrl: img8,  text: '' },
    { id: 9, imageUrl: img9,  text: '' },
  ]
  const land=[
    { id: 10, imageUrl: img10 , text: '' },
    { id: 11, imageUrl: img11,  text: '' },
    
  ]

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
    RK Ricemill embraces cutting-edge technology to elevate the milling process. <br></br>Our factory boasts advanced machinery that ensures precision and efficiency at every stage of production. <br></br>From automated sorting systems to the latest milling techniques, we leverage technology to deliver rice products of unparalleled quality.
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
    Quality is the cornerstone of RK Ricemill's success.<br></br> We implement rigorous quality control measures from the sourcing of paddy to the final packaging of our rice products. <br></br>Our commitment to excellence is reflected in the texture, aroma, and nutritional content of each batch of rice, ensuring that our customers receive nothing but the best.
</p>

    <div className='grid-container'> 
   {machine.map(item => (
          <div key={item.id} className="grid-item">
             <img src={item.imageUrl}  alt={`Item ${item.id}`}/>
             <h3 className="image-text">{item.text}</h3>
          </div>
        ))}
      </div>
      <p className='para'>
      At RK Ricemill, sustainability is not just a goal; it's a responsibility. <br></br>We integrate eco-friendly initiatives into our operations, including water recycling systems, energy-efficient machinery, and waste reduction strategies.<br></br> By prioritizing sustainability, RK Ricemill aims to contribute to a healthier planet and set new standards for environmentally conscious business practices.
</p>
      <div className='grid-container'> 
      {fact.map(item => (
          <div key={item.id} className="grid-item">
             <img src={item.imageUrl}  alt={`Item ${item.id}`}/>
             <h3 className="image-text">{item.text}</h3>
          </div>
        ))}
      </div>

      <p className='para'>
      RK Ricemill stands as a beacon of innovation, quality, and customer-centric excellence in the rice milling industry.<br></br> With our state-of-the-art technology, unwavering commitment to quality assurance, sustainable practices, and a focus on customer satisfaction, RK Ricemill invites you to experience the difference in every grain. <br></br>Choose RK Ricemill as your trusted partner for premium rice products, and embark on a journey of quality and satisfaction that exceeds expectations.
</p>

      <div className='grid-container'> 
      {land.map(item => (
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