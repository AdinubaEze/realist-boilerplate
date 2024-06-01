import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section id='contact' data-aos="fade-zoom-in">
        <div className="wrapper">
            <div className="contact-form">
              <div className="top">
                <h1 className="title">
                  <span className="gradient-text">Join forces with us!</span>
                </h1>
                <p className="muted">
                  We build with precision and passion, creating structures that stand 
                  the test of time. It's as straightforward as that!
                </p>
              </div>
              <div className="middle">
                <div className="flex row">
                  <input type="text" placeholder='First name' name='firstname' className='control'/>
                  <input type="text" placeholder='Last name' name='lastname' className='control'/>
                </div>
                <div className="flex row">
                  <input type="email" placeholder='Email address' name='email' className='control'/>
                  <input type="tel" placeholder='Phone number' name='phone' className='control'/>
                </div>
                <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
              </div>
              <div className="flex-center bottom">
                <button className="btn primary">Send Now</button>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
