/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './Style/Contact.css'

function Contact() {
  return (
    <form action="#" method="post" className='contact'>
     {/* <p>Please take a moment to get in touch, we will get back to you shortly.</p>
   */}
    <div class="column">
    <label for="the-name">Your Name</label>
    <input type="text" name="name" id="the-name" className='cinput'/>

    <label for="the-email">Email Address</label>
    <input type="email" name="email" id="the-email" className='cinput'/>

    <label for="the-phone">Phone Number</label>
    <input type="tel" name="phone" id="the-phone" className='cinput'/>
    <label for="the-reason">How can we help you?</label>
    <select name="reason" id="the-reason">
    <option value="">Choose one</option>
    <option value="web">I need web design services</option>
    <option value="video">I need you to produce a video</option>
    <option value="3d">I need 3D polygon things</option>
  </select>
    </div>
    <div class="column">
      <label for="the-message">Message</label>
      <textarea name="message" id="the-message"></textarea>
      <label>
      <input type="checkbox" name="newsletter" value="yes"  className='cinput'/> Join our mailing list?
      </label>
      <input type="submit" value="Send Message" className='cinput'/>
    </div>
  </form>
  )
}

export default Contact;