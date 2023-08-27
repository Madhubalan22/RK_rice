import React from 'react'

const contact = () => {
  return (
  <>
    <div>contact</div>
    <section className="contact" id="contact">
  
  <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>

  <div className="container">
    <div className="content">
      <div className="image-box">
        <image draggable="false" src="./assets/images/contact1.png" alt=""></image>
      </div>
    <form id="contact-form">
      
      <div className="form-group">
        <div className="field">
          <input type="text" name="name" placeholder="Name" required></input>
          <i className='fas fa-user'></i>
        </div>
        <div className="field">
          <input type="text" name="email" placeholder="Email" required></input>
          <i className='fas fa-envelope'></i>
        </div>
        <div className="field">
          <input type="text" name="phone" placeholder="Phone"></input>
          <i className='fas fa-phone-alt'></i>
        </div>
        <div className="message">
        <textarea placeholder="Message" name="message" required></textarea>
        <i className="fas fa-comment-dots"></i>
        </div>
        </div>
      <div className="button-area">
        <button type="submit">
          Submit <i className="fa fa-paper-plane"></i></button>
      </div>
    </form>
  </div>
  </div>
</section>

 
</>

  )
}

export default contact;