import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/664657.webp?k=c1d999b8766abab322730158d960eec68af7910fec9ff61b5339636fd74dfb0e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pokhara</h1>
          <h2>600 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/664666.webp?k=e7f2be1324d4595363ec6d46d988eb21cee118a5530ce0a19a18cf85c4473d2e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kathmandu</h1>
          <h2>929 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/941487.webp?k=c75b3673cb4808baa048069f28bf3adc8850629afb64f9a2a11a24861e37d17f&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nagarkot</h1>
          <h2>47 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/913379.webp?k=6cfeb1a9095c1b795908f37391404dbc4d698350fcf7dfd83e7756a8e4b153be&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sauraha</h1>
          <h2>108 properties</h2>
        </div>
        {/* <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/square250/960553.webp?k=c5e6482bbb88097905af1590f21494e5162aaeea3461d6d15809d595480ec9da&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Chitwan</h1>
            <h2>23 properties</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
