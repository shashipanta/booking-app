import "./hotel.css";
import React from "react";
import NavBar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import MailList from "./../../components/mail/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleArrowRight,
  faCircleArrowLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import FilledButton from "../../components/ui/buttons/FilledButton";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349433113.jpg?k=475a7e2bc02967d14ca289ffbdb3d55ad1fe09d0a0cc93158c7ad76be24da1d6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/331352134.jpg?k=b898a29bdfde7bb1b15dc554e9fd52fe53b321e2296f0f46a0347aa6bf370b52&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349432968.jpg?k=f84afe1bf6105b1b7bed3a7d7178569c5a6d0779220edac1b76584c1b7d34c56&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349432727.jpg?k=bba16a5cdad0fc6b546dbda7a3c26f86524ac9ee1cf83a6190ce408c8f5dccdf&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349432966.jpg?k=3ebf7feb8229326899c5551d79819b016b07fe90aa49620896817d61ce228294&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/331352119.jpg?k=1b8d47e6998bb9d2c7b0c67b8318369924456e0d1f103238f95b7efd33eaabcc&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349433095.jpg?k=0125281238d0c2e8ad98b92c5ed7ac3b1ef5aae7310e478f808e37d5ac124ad1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349433005.jpg?k=6534674a7cc2b4721d346e0be26a3a63bc573cc61703acf78a3d7df55000cfc8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/349433149.jpg?k=e92ecf7af8d79094ab5d5fd7f980db972dfa8a5f04d226fcc160f73199b9e89c&o=&hp=1",
    },
  ];

  const totalImg = photos.length;

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(!open);
  };

  const handlePrevImg = (prevSlideNumber) => {
    setSlideNumber(prevSlideNumber + 1);
  };

  const hanldeImgSlider = (option) => {
    if (option == "p") {
      // previoius image
      slideNumber == 0
        ? setSlideNumber(totalImg - 1)
        : setSlideNumber(slideNumber - 1);
    } else {
      // next image
      slideNumber == totalImg - 1
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            {/* Slider close btn */}
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => handleOpen(slideNumber)}
              className="sliderCloseBtn"
            />
            {/* Slider Prev btn */}
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              onClick={() => hanldeImgSlider("p")}
              className="arrow"
            />
            <div className="slideWrapper">
              <img
                src={photos[slideNumber].src}
                alt="Hotel image"
                className="sliderImg"
                srcset=""
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              onClick={() => hanldeImgSlider("n")}
              className="arrow"
            />
          </div>
        )}
        <div className="hotelWrapper">
          <div className="hotelTitleContainer">
            {/* Top hanging book now */}
            <FilledButton btnName="Reserve Now" btnType="primary" />
            <h1 className="hotelTitle">Grand Hotel</h1>
          </div>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} className="locationIcon" />
            <span>
              Brahmakumari Marg, Jyatha, Thamel, Kathmandu, Nepal, Thamel, 44600
              Kathmandu, Nepal
            </span>
            -
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  srcset=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Kathmandu</h1>
              <p className="hotelDesc">
                Located in Kathmandu, a 12-minute walk from Hanuman Dhoka,
                Kantipur Village has accommodations with a restaurant, free
                private parking, a bar and a shared lounge. Featuring family
                rooms, this property also provides guests with a terrace. The
                property provides a 24-hour front desk, room service and
                currency exchange for guests. The rooms at the hotel come with
                air conditioning, a seating area, a flat-screen TV with
                satellite channels, a safety deposit box and a private bathroom
                with a shower, bathrobes and slippers. At Kantipur Village rooms
                contain bed linen and towels.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Property Highlights</h1>
              <div className="hotelLocationInfo">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="locationIcon"
                />
                <span className="locationInfo">
                  located in the heart of Kathmandu, this hotel has an excellent
                  location score of 9.5
                </span>
              </div>
              <h1>Breakfast Info</h1>
              <p className="breakfastInfo">
                Continental, American, Buffet, Breakfast to go
              </p>
              <div className="addInfo">
                <span className="parkingIconCircle">P</span>
                <span className="parkingInfo">
                  Free private parking available at the hoel
                </span>
              </div>

              {/* reserve button */}
              <FilledButton btnName="Reserve" btnType="primary" />
            </div>
          </div>
        </div>
      </div>
      <MailList />
    </>
  );
};

export default Hotel;
