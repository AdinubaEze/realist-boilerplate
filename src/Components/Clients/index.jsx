import React,{useRef} from 'react'
import "./Clients.css"
import Slider from 'react-slick'
import { clients } from '../../sources';
import { FaStar } from 'react-icons/fa';
import { FaLongArrowAltLeft ,FaLongArrowAltRight} from "react-icons/fa";



const Clients = () => {
  const ref = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode:true,
    pauseOnHover:true,
    autoplay: true,
    autoplaySpeed:3000,
    centerPadding:0,
  };

  return (
    <section id='clients'>
      <div className="wrapper">
        <h1 className="heading-1" data-aos="fade-left">
          Clients <span className="gradient-text">Testimonies</span>
        </h1>
        <h3 className="sub-title" data-aos="fade-left" data-aos-delay="400">What our clients is saying</h3>

        <div data-aos="fade-right">
        <Slider {...settings} className='clients-container' ref={ref}>
          {
            clients.map((list,index)=>(
              <React.Fragment key={index}>
                <div className="flex">
                  <div className="profile">
                    <img src={list.image} alt={list.name} />
                  </div>
                  <div className="details">
                    <h3 className="name">{list.name}</h3>
                    <small className="muted">CEO of benvix</small>
                  </div>
                </div>
                <p className="muted content">{list.review}</p>
                <div className="stars-container">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
              </React.Fragment>
            ))
          }
        </Slider>
        </div>
        <div className="flex-center buttons__container" data-aos="fade-left">
            <button 
              className="flex-center btn"
              onClick={()=>ref.current.slickPrev()}
              >
                <FaLongArrowAltLeft/>
            </button>
            <button 
            className="flex-center btn"
            onClick={()=>ref.current.slickNext()}
            >
                <FaLongArrowAltRight/>
            </button>
        </div>
      </div>
    </section>
  )
}

export default Clients
