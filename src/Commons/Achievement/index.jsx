import React,{useState,useEffect} from 'react'
import "./Achievement.css"
import { FaDiagramProject, FaUsersLine } from 'react-icons/fa6'
import Odometer from 'react-odometerjs'
import { FaAward } from 'react-icons/fa'


const Achievement = () => {
    const [clients,setClients] = useState(0);
    const [properties,setProperties] = useState(0);
    const [awards,setAwards] = useState(0);
    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setClients(350);
            setProperties(25);
            setAwards(89);
        },3000);

        return () => clearTimeout(timeOutId);
    },[])

  return (
    <div className='achievement-container'>
        {/* Start card */}
       <div className="card" data-aos="fade-right" data-aos-delay="1000">
          <div className="flex details">
              <div className="icon-wrapper flex-center">
                  <FaUsersLine/>
              </div>
              <div className="flex-center">
                  <Odometer value={clients} className="title"/>
                  <h1 className="title">+</h1>
              </div>
          </div>
          <small className="muted">Happy Customers</small>
       </div>
       {/* End card */}

        {/* Start card */}
        <div className="card" data-aos="fade-right" data-aos-delay="800">
          <div className="flex details">
               <div className="icon-wrapper flex-center">
                   <FaDiagramProject/>
               </div>
              <div className="flex-center">
                  <Odometer value={properties} className="title"/>
                  <h1 className="title">k+</h1>
              </div>
          </div>
          <small className="muted">Properties</small>
       </div>
       {/* End card */}


       {/* Start card */}
       <div className="card" data-aos="fade-right" data-aos-delay="600">
          <div className="flex details">
               <div className="icon-wrapper flex-center">
                   <FaAward/>
               </div>
              <div className="flex-center">
                  <Odometer value={awards} className="title"/>
                  <h1 className="title">+</h1>
              </div>
          </div>
          <small className="muted">Awards Winning</small>
       </div>
       {/* End card */}
    </div>
  )
}

export default Achievement
