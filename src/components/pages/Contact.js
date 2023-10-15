import React, { useState } from 'react';
import './../../App.css';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({}); // State for form validation errors

  function validateForm() {
    const errors = {};

    // Validate first name (Minimum 3 characters)
    if (firstName.trim().length < 3) {
      errors.firstName = 'Minimum 3 characters required for first name';
    }

    // Validate last name (Minimum 3 characters)
    if (lastName.trim().length < 3) {
      errors.lastName = 'Minimum 3 characters required for last name';
    }

    // Validate subject (Minimum 3 characters)
    if (subject.trim().length < 3) {
      errors.subject = 'Minimum 3 characters required for subject';
    }

    // Validate email (Must be a valid email address)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Must be a valid email address';
    }

    // Validate message (Minimum 3 characters)
    if (message.trim().length < 3) {
      errors.message = 'Minimum 3 characters required for the message';
    }

    setFormErrors(errors);

    // Check if there are no errors
    const isValid = Object.keys(errors).length === 0;

    // Log to the console when the form is validated
    if (isValid) {
      console.log('Form is validated.');
    }

    return isValid;
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const body = {
        firstName,
        lastName,
        subject,
        email,
        message,
      };

      // Send the request with the valid data
      fetch('https://jolly-nasturtium-62c5db.netlify.app', {
        method: 'POST',
        body: JSON.stringify(body),
      });
    }
  }

  function onTextInputChange(event) {
    const { name, value } = event.target;
    if (name === 'first-name') {
      setFirstName(value);
    }
    if (name === 'last-name') {
      setLastName(value);
    }
    if (name === 'subject') {
      setSubject(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
  }

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
        {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}

        <label htmlFor="last-name">Last name</label>
        <input
          name="last-name"
          value={lastName}
          placeholder="Your last name"
          onChange={onTextInputChange}
        />
        {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}

        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={subject}
          placeholder="Your subject"
          onChange={onTextInputChange}
        />
        {formErrors.subject && <p className="error">{formErrors.subject}</p>}

        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          placeholder="Your email"
          onChange={onTextInputChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={message}
          placeholder="Your message"
          onChange={onMessageChange}
        />
        {formErrors.message && <p className="error">{formErrors.message}</p>}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;


