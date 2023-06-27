import React from 'react'
import {  NavLink } from 'react-router-dom';
export default function FooterMenu() {
  return (
    <ul className="nav justify-content-left border-bottom mb-3 menu">
      <li className="nav-item">
        <NavLink className="nav-link px-2" to=''>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link px-2" to='aboutus'>About Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link px-2" to='contact'>Contact</NavLink>
      </li>
    </ul>
  )
}
