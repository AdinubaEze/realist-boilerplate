import React, { useState } from 'react'
import "./Navbar.css"
import {tabs} from "../../sources"
import { Link } from 'react-scroll'
import Logo from '../../Commons/Logo'
import SocialHandles from '../../Commons/SocialHandles'
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [openSidebar,setOpenSidebar] = useState(false);
  return (
    <nav className='navbar flex'>
       {openSidebar ? (<div className='overlay' onClick={()=>setOpenSidebar(!openSidebar)}></div>):""}
       <Logo/>
       <div className={`box flex-center tabs-group sidebar ${openSidebar ?'visible':''}`}>
              {
                tabs.map((tab,index)=>(
                   <Link
                    to={tab.id}
                    smooth={true}
                    offset={-70}
                    spy={true}
                    className='tab'
                    activeClass='active'
                    key={index}
                    >
                     {tab.name}
                    </Link>
                ))
              }
       </div>
       <SocialHandles/>
       <div className="box flex-center buttons">
          <Link to='services' smooth={true} className='btn services-btn'>Services</Link>
          <Link to='contact' smooth={true} className='btn primary contact-btn'>Contact Us</Link>
          <div 
           className="flex-center icon-wrapper menu-btn"
           onClick={()=>setOpenSidebar(!openSidebar)}
           >
            <HiMenu/>
          </div>
       </div>
    </nav>
  )
}

export default Navbar
