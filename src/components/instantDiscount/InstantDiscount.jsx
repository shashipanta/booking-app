import React from "./instantDiscount.css";

const InstantDiscount = () => {
  return (
    <div className="idContainer">
      <div className="idImg"></div>
      <div className="idContent">
        <h1 className="idTitle">Get Instant Discounts</h1>
        <p className="idMsg">
          Just sign in to your Booking.com account and look for the blue Genius
          Logo to save.
        </p>
        <div className="links">
          <button className="signIn outline">Sign In</button>
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
};

export default InstantDiscount;
