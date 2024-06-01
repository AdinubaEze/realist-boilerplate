import React,{useRef} from 'react'
import "./Agents.css"
import { agents } from '../../sources'
import Slider from 'react-slick'
import { FaLongArrowAltLeft ,FaLongArrowAltRight} from "react-icons/fa";

const Agents = () => {
  const ref = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode:true,
    pauseOnHover:true,
    autoplay: true,
    autoplaySpeed:3000,
    centerPadding:0,
    responsive:[
      {
        breakpoint:900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint:600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <section id='agents'>
       <div className="wrapper">
           <h1 className="heading-1" data-aos="fade-left">
             <span className="gradient-text">Agents</span>
           </h1>
           <div data-aos="fade-right">
           <Slider {...settings} className='agent-container' ref={ref}>
             {
                agents.map((agent,index)=>(
                    <React.Fragment key={index}>
                        <div className="profile">
                            <img src={agent.profile} alt="" />
                        </div>
                        <h3 className="name">{agent.name}</h3>
                        <div className="flex-center social-container">
                            {
                                agent.socialHandles.map((list,i)=>(
                                    <a href={list.url} target='_blank' className="flex-center icon-wrapper">
                                        {list.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </React.Fragment>
                ))
             }
           </Slider>
           </div>
           <div className="flex-center buttons__container">
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

export default Agents
