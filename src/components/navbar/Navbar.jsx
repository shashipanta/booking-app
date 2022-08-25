import React from "react";
import { useNavigate } from "react-router-dom";
import FilledButton from "../ui/buttons/FilledButton";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleNavigation}>
          Hotel Booking
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          {/* <FilledButton btnName="Register" /> */}
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
