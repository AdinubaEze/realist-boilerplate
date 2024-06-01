import React from 'react'
import "./Hero.css"
import { Link } from 'react-scroll'
import heroImage from "../../assets/realist-hero.png"
import Achievement from '../../Commons/Achievement'

const Hero = () => {
  return (
    <header id='hero'>
       <div className="wrapper">
           <div className="column">
              <h1 className="heading-1" data-aos="fade-up">
                 <span className='gradient-text'>Find Your Dream Home with Realist Realty</span>
              </h1>
              <p className="muted" data-aos="fade-up" data-aos-delay="200">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt unde beatae reprehenderit atque quaerat. Sed, similique saepe doloremque alias a reiciendis, accusantium illum ea officia aut nesciunt at beatae?
              </p>
              <Achievement/>
              <div className="flex-center buttons-wrapper">
                 <Link to='contact' smooth={true} className='btn' data-aos="fade-left" data-aos-delay="1200" data-aos-offset="50">Learn more</Link>
                 <Link to='properties' smooth={true} className='btn primary' data-aos="fade-left" data-aos-delay="1500" data-aos-offset="50">Explore Properties</Link>
              </div>
           </div>
           <div className="column hero-image" data-aos="fade-left" data-aos-delay="1200">
             <img src={heroImage} alt="" />
           </div>
       </div>
    </header>
  )
}

export default Hero
