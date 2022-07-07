import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact  = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="contactform"> 
            <form  ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input autoComplete="off" type="text" name="user_name" />

                <label>Email</label>
                <input autoComplete="off" type="email" name="user_email" />

                <label>Message</label>
                <textarea name="message" />

                <input type="submit" value="Send" />
            </form>
        </div>
    )
}
export default Contact