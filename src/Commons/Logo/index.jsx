import React from 'react'
import { MdRealEstateAgent } from "react-icons/md";
import "./Logo.css"

const Logo = () => {
  return (
    <div className='logo'>
      <MdRealEstateAgent className='icon'/>
      <h1>Realist</h1>
    </div>
  )
}

export default Logo
