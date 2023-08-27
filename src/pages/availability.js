import React from 'react'
import "../styles/availability.css"
import "../images/basmati.jpg"
const items = [
    { id: 1, imageUrl: '' },
    { id: 2, imageUrl: 'path_to_image_1.jpg' },
    { id: 3, imageUrl: 'path_to_image_1.jpg' },
    { id: 4, imageUrl: 'path_to_image_1.jpg' },
    // ... Add more items as needed
  ];
const availability = () => {
  return (
    <div className='grid-container'>
 {items.map(item => (
        <div key={item.id} className="grid-item">
           <img src={item.imageUrl}  alt={`Item ${item.id}`}/>
        </div>
      ))}
    </div>
  )
}

export default availability