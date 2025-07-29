import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import Insta_logo from '../../assets/Insta_logo.png'
import Github_logo from '../../assets/Github_logo.png'

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a2885008-b16e-4332-965c-44f26e015d3e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk </h1>
                <p>I'm currently available to take on exciting new projects, so if you have an idea in mind or need someone to bring your vision to life, feel free to reach out at any time—I'd love to hear from you!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p><a href="mailto:mrabhi670@gmail.com">mrabhi670@gmail.com</a></p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+91 9148314969</p>
                    </div>
                    <div className="contact-detail">
                        <img src={Insta_logo} alt="" height={38} width={35} /><p><a href="https://www.instagram.com/mr_abhi_698/">mr_abhi_698</a></p>
                    </div>
                    <div className="contact-detail">
                        <img src={Github_logo} alt="" height={45} width={45} /><p><a href="https://github.com/MrAbhi698">MrAbhi698</a></p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Karnataka, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact