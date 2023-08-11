
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set your EmailJS user ID and template ID
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;



    // Prepare the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email, // Include the email address in the templateParams
      message: message,
    };

    // Send the email using EmailJS
   // Send the email using EmailJS
   emailjs.send('service_fpizptm', templateID, templateParams, userID)
   .then((response) => {
     setSuccessMessage('Your message has been sent successfully!');
     setName('');
     setEmail('');
     setMessage('');
   })
   .catch((error) => {
     setErrorMessage('Oops! Something went wrong. Please try again later.');
   });
};

  return (

    <div className="contact-container">

      <h2>Leave Me a Message, and I'll Get in Contact</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contacts;
