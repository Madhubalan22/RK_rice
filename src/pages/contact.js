import React, { useState } from "react";
import emailjs from "emailjs-com";
import Iframe from "react-iframe";
import Nav from "../components/Nav";
import "../styles/contact.css";

function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name: e.target.name.value,
        phone: e.target.mobile.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      await emailjs.send(
        "service_psxb1rc",
        "template_umz4fqj",
        templateParams,
        "PIu9I0Aar4i-ETK0F"
      );
      setMessageSent(true);
      setErrorMessage(false);
      e.target.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setMessageSent(false);
      setErrorMessage(true);
    }
  };

  return (
    <>
      <Nav />
        <div className="contact-form">
          <h2>Contact</h2>
          <form onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="mobile">Mobile:</label>
            <input type="text" id="mobile" name="mobile" required />
            <br />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <br />

            <button type="submit">Send</button>
          </form>
          {messageSent && (
            <p className="success-message">Email sent successfully!</p>
          )}
          {errorMessage && (
            <p className="error-message">
              An error occurred while sending the email.
            </p>
          )}
        </div>
        <div className="map-container">
      <Iframe
        url="https://maps.google.com/maps?q=RK%20Ricemill,Main%20road,Boojankaraya%20Nallur,Tamil%20Nadu%20621713&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
        width="100%"
        height="500px" /* Adjust the height as needed */
        id="myId"
        className="iframe-class"
        display="initial"
        position="relative"
      />
    </div>
      
    </>
  );
}

export default ContactForm;
