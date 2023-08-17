"use client"
import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

const Navbarburger = () => {

  const [navmenu, setnavmenu]= useState(false);
  const togglemenu =()=>{
    setnavmenu(!navmenu)
  }

  return (
    <div>
      {navmenu &&(
        <ul className='bg-black w-1/4 fixed'>
          <li><GrClose/></li>
          <li>MUSIC</li>
          <li>ARTIST</li>
          <li>NEWS</li>
          <li>EVENTS</li>
          <li>PROGRAMMING</li>
          <li>PARTNERS</li>
          <li>SHOP</li>
          <li>PRESS</li>
          <li>LOCAL CIVILIZATION</li>
        </ul>
      ) }
  <button>
    <GiHamburgerMenu 
    className='mb-10'
    onClick={togglemenu} 
    />
  </button>
  </div>
  )
}

export default Navbarburger