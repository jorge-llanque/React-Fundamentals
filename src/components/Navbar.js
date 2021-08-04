import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/categories" activeClassName="active" >Category</NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active" >Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" >Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}
