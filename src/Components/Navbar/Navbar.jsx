import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar flex w-full p-5 shadow '>
      <div className="heading ml-2 ">Prunet</div>
      <ul className="menu-items hidden lg:flex w-3/4 text-white">
        <li><a href="#" className='active'>Home</a></li>
        <li><a href="#" className='active'>About</a></li>
        <li><a href="#" className='active'>Projects</a></li>
        <li><a href="#" className='active'>Clients</a></li>
        <li><a href="#" className='active'>Contact us</a></li>
      </ul>
      <div className="hamburger block lg:hidden text-white">Ham</div>
      <div className="sidepanel block lg:hidden w-1/2 flex"></div>
    </nav>
  )
}

export default Navbar
