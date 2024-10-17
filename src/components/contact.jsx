import { useState } from 'react';
import React from 'react';
import { sendContactForm } from '../services/contact.service';

import { Modal } from './modal';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = (props) => {
  const [{ name, email, country, message }, setState] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data to be sent
    const formData = {
      to: 'info@gitagroup.ca',
      from: email,
      subject: `CONTACT FORM: ${name} | ${country}`,
      name: name,
      body: message,
    };

    // Call the sendContactForm function to submit the form data
    await sendContactForm(formData);

    // Clear the form state after submission
    clearState();

    // Set formSubmitted to true to display the thank you message
    setFormSubmitted(true);
  };

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                {!formSubmitted ? (
                  <p>
                    Please fill out the form below to send us an email with your
                    specific needs and we will get back to you as soon as
                    possible.
                  </p>
                ) : null}
              </div>
              {formSubmitted ? (
                <div>
                  <p>
                    Thank you, Your message has been sent. We will contact you
                    in 1-2 business days.
                  </p>
                </div>
              ) : (
                <form name='sentMessage' validate={""} onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Name'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='form-group'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='country'
                          name='country'
                          className='form-control'
                          placeholder='Country'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Message'
                      required
                      onChange={handleChange}></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div id='success'></div>
                  <button type='submit' className='btn btn-custom btn-lg'>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
            </div>

            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i>{' '}
                  {props.data ? props.data.email : 'loading'}
                </span>{' '}
                <span>
                  {' '}
                  <i className='fa fa-whatsapp'></i>{' '}
                  <a
                    style={{ color: '#fff' }}
                    href={`https://wa.me/${props.data ? props.data.tel.toString() : 'loading'}`}>
                    WhatsApp
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className='col-md-12'></div>
        </div>
      </div>

      <div id='footer'>
        <div className='container text-center'>
          <p>
            <span>&copy; {new Date().getFullYear()} Gita Group </span>
            <Modal
              title='Terms Of Use'
              buttonText='Terms Of Use'
              description= {props.legal ? props.legal.TermsOfUse : 'loading'}></Modal>{' '}
            | <Modal
              title='Privacy Policy'
              buttonText='Privacy Policy'
              description= {props.legal ? props.legal.PrivacyPolicy : 'loading'}></Modal>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
