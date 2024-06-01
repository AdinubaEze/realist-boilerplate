import React from 'react'
import "./Properties.css"
import { properties } from '../../sources'
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";

const Properties = () => {
  return (
    <section id='properties'>
       <div className="wrapper">
           <h1 className="heading-1" data-aos="fade-right">
            <span className="gradient-text">Featured Properties</span>
           </h1>
           <div className="properties__container">
              {
                properties.map((property,index)=>(
                  <div className="property" data-aos="fade-up" key={index}>
                     <div className="top picture">
                       <img src={property.image} alt="" />
                     </div>
                     <div className="middle">
                         <div className="row flex">
                           <h3 className="title clamp-2">{property.title}</h3>
                           <h1 className="price">{property.price}</h1>
                         </div>
                         <p className="muted description">{property.description}</p>
                         
                     </div>
                     <div className="bottom">
                         <div className="row flex">
                            <div className="flex-center btn">
                              <FaBed/>
                              {property.bathrooms}
                            </div>
                            <div className="flex-center btn">
                              <FaBath/>
                              {property.bathrooms}
                            </div>
                         </div>
                         <div className="btn primary">View Property</div>
                     </div>
                  </div>
                ))
              }
           </div>
       </div>
    </section>
  )
}

export default Properties
