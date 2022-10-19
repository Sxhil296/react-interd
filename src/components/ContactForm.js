import React from 'react'
import './ContactFormStyles.css'
import {AiOutlineHome, AiOutlineTablet, AiOutlineMail} from 'react-icons/ai'

const ContactForm = () => {
  return (
    <div className="row">
<div className="col-12">
<h2 className="contact-title">Get in Touch</h2>
</div>
<div className="col-lg-8">
<form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
<div className="row">
<div className="col-12">
<div className="form-group">
<textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
</div>
</div>
<div className="col-sm-6">
<div className="form-group">
<input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
</div>
</div>
<div className="col-sm-6">
<div className="form-group">
<input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
</div>
</div>
<div className="col-12">
<div className="form-group">
<input className="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject"/>
</div>
</div>
</div>
<div className="form-group mt-3">
<button type="submit" className="button button-contactForm boxed-btn">Send</button>
</div>
</form>
</div>
<div className="col-lg-3 offset-lg-1">
<div className="media contact-info">
<span className="contact-info__icon">< AiOutlineHome size={30}/></span>
<div className="media-body">
<h3>New Delhi, India.</h3>
<p>Rosemead, CA 91770</p>
</div>
</div>
<div class="media contact-info">
<span class="contact-info__icon"><AiOutlineTablet size={30}/></span>
<div class="media-body">
<h3>+91 7878787878</h3>
<p>Mon to Fri 9am to 6pm</p>
</div>
</div>
<div class="media contact-info">
<span class="contact-info__icon"><AiOutlineMail size={30}/></span>
<div class="media-body">
<h3>interd@gmail.com</h3>
<p>Send us your query anytime!</p>
</div>
</div>
</div>
</div>
  )
}

export default ContactForm