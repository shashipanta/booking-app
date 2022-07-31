import React from 'react'
import FilledButton from '../ui/buttons/FilledButton'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
    <div className="navContainer">
        <span className="logo">Hotel Booking</span>
        <div className="navItems">
            <button className="navButton">Register</button>
            {/* <FilledButton btnName="Register" /> */}
            <button className="navButton">Login</button>
        </div>
    </div>    
    </div>

  )
}

export default Navbar