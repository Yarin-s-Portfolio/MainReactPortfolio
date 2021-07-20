import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormStyles = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;


function ContactForm(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSub = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9k7unqi', 'template_nbsslwo', e.target, 'user_EQXdkvS04ASvBcI8BQA07')
      .then(res => {
        console.log(res.text);
      }).catch(err => {
        console.log(err.text);
      })
  }

  return (
    <FormStyles>
      <form onSubmit={onSub}>
        <div className="form-group">
          <label htmlFor="name">Your Name
            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email
            <input type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message
            <textarea type="text" id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </FormStyles>
  )
}

export default ContactForm