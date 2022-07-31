import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredPropertiesList/FeaturedProperties";
import Header from "../../components/header/Header";
import Info from "../../components/infobar/Info";
import InstantDiscount from "../../components/instantDiscount/InstantDiscount";
import Navbar from "../../components/navbar/Navbar";
import Promotions from "../../components/promotions/Promotions";
import PropertyList from "../../components/propertyList/PropertyList";
import Subscription from "../../components/subscription/Subscription";
import NavList from "../../components/navlist/NavList";
import MailList from "../../components/mail/MailList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <div className="homeTitle">
          <h1 className="homeTitle">Explore Nepal</h1>
          <h5 className="homeSubTitle">
            These popular destinations have a lot to offer
          </h5>
        </div>
        <Featured />
        <InstantDiscount />
        <Subscription />
        <Info />
        <h1 className="homeTitle">Home Guests Love</h1>
        <FeaturedProperties />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Get Inspiration for Your Next Trip</h1>
        <Promotions />
        <h1 className="homeTitle">Destinations We Love</h1>
        <NavList />
      </div>
    <MailList />
    </div>
  );
};

export default Home;
