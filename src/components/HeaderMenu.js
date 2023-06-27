import React from 'react'
import {  NavLink } from 'react-router-dom';
export default function HeaderMenu() {
  return (
    <ul className="nav menu ms-auto order-2">
      <li>
        <NavLink className="nav-link" to=''>Home</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to='aboutus'>About Us</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to='contact'>Contact</NavLink>
      </li>
    </ul>
  )
}
