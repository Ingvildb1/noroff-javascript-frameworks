import React, { useState } from 'react';
import './../../App.css';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State for the message textarea

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      subject,
      email,
      message, // Include the message in the request body
    };

    fetch('http://www.example.com', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === 'first-name') {
      setFirstName(value);
    }
    if (event.target.name === 'last-name') {
      setLastName(value);
    }
    if (event.target.name === 'subject') {
      setSubject(value);
    }
    if (event.target.name === 'email') {
        setEmail(value);
    }
  }

  // Function to handle changes in the message textarea
  function onMessageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <div>
        
      <form onSubmit={onFormSubmit}>
      <h1>Contact Us</h1>
        <label htmlFor="first-name">First name</label>
        <input
          name="first-name"
          value={firstName}
          placeholder="Your first name"
          onChange={onTextInputChange}
        />
        <label htmlFor="last-name">Last name</label>
        <input
          name="last-name"
          value={lastName}
          placeholder="Your last name"
          onChange={onTextInputChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={subject}
          placeholder="Your subject"
          onChange={onTextInputChange}
        />
         <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          placeholder="Your email"
          onChange={onTextInputChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={message}
          placeholder="Your message"
          onChange={onMessageChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;

