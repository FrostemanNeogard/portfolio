import emailjs from '@emailjs/browser'
import { useRef } from 'react';

export default function Contact() {

  // TODO: This doesn't work at the moment
  const PUBLIC_KEY = process.env.PUBLIC_KEY

  const form = useRef();
  const sendEmail = e => {

    e.preventDefault();
    emailjs.sendForm('gmail', 'standard', form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text);
      })
  }

  return (
    <section className='email-form'>
      <h1>Send me an email.</h1>
      <form ref={ form } onSubmit={ sendEmail }>
        <div>
          <label>Name</label>
          <input type="text" name="from_name" required/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="from_email" required/>
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" required/>
        </div>
        <div>
          <input type="submit" value="Send"/>
        </div>
      </form>
    </section>
  )
}