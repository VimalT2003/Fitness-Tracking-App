import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'


export const ContactUs = () => {
  const form = useRef();
  const [clear,setClear]= useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gyoe3ye', 'template_dotcgt9', form.current, {
        publicKey: 'fGxro7jLH4fTAoCH7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your response submitted successfully",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
        <div className='row'>
          <h1 className='text-center'><b>Contact Us</b></h1>
            <div className='col-6' data-aos="zoom-in"  data-aos-duration="2000">
                <img src="https://www.freeprivacypolicy.com/public/images/illustrations/illustration-contact.png" style={{height:"100%",width:"100%"}} />
            </div>
            <div className=' col-6 mt-5' data-aos="flip-left"  data-aos-duration="2000">
            <Form ref={form} onSubmit={sendEmail} > 
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><b>Name</b></Form.Label>
        <Form.Control type="text" name="from_name" placeholder="Enter your name" />
      </Form.Group>
                   
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><b>Email address</b></Form.Label>
        <Form.Control type="email" name="from_email" placeholder="Enter your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><b>Message</b></Form.Label>
        <Form.Control as="textarea" name="message"  rows={3} />
      </Form.Group>
      <button type="submit" className='btn btn-success px-4'><b>Submit</b></button>
              </Form>
            </div>
        </div>
   
   
  );
};