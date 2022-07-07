import React from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact  = () => {  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_id', 'template_id', e.target, 'public-key')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully")
      }, (error) => {
          console.log(error.text);
          alert("Somethinf went wrong")
      });
      e.target.reset();
  };

    return (
        <div className="contactform"> 
            <form   onSubmit={sendEmail}>
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