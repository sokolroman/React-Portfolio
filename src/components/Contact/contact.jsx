import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    let hasErrors = false;

    if (!name) {
      setNameError(true);
      hasErrors = true;
    } else {
      setNameError(false);
    }

    if (!email || !validateEmail(email)) {
      setEmailError(true);
      hasErrors = true;
    } else {
      setEmailError(false);
    }

    if (!message) {
      setMessageError(true);
      hasErrors = true;
    } else {
      setMessageError(false);
    }

    if (!hasErrors) {
      // Submit the form
    }
  }

  return (
    <form className="contact" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={nameError ? 'error' : ''}
          required
        />
        {nameError && <div className="error-message">Name is required</div>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={emailError ? 'error' : ''}
          required
        />
        {emailError && (
          <div className="error-message">
            Please enter a valid email address
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={messageError ? 'error' : ''}
          required
        />
        {messageError && (
          <div className="error-message">Message is required</div>
        )}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
