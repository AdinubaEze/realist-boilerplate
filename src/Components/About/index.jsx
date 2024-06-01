import React from 'react'
import "./About.css"
import aboutImage from "../../assets/about-image.jpeg"
import { whyChooseUs } from '../../sources'

const About = () => {
  return (
    <section id='about'>
       <div className="wrapper">
         <div className="column">
            <div className="picture" data-aos="fade-right">
              <img src={aboutImage} alt="" />
            </div>
         </div>
         <div className="column">
             <h1 className="heading-1" data-aos="fade-left">
                <span className="gradient-text">About Us</span>
             </h1>
             <p className="muted" data-aos="fade-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit voluptate dolores voluptatum ex. Veniam sed harum, autem esse dolorem aut ut ab quasi quae facilis culpa optio fugit eos.
             </p>
             <div className="group">
                 {
                    whyChooseUs.map((list,index)=>(
                        <div className="flex-center group-item" data-aos="fade-right" key={index}>
                            <div className="flex-center icon-wrapper">
                                {list.icon}
                            </div>
                            <h4 className="title">{list.title}</h4>
                        </div>
                    ))
                 }
             </div>
         </div>
       </div>
    </section>
  )
}

export default About
