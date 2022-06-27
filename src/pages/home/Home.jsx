import React from "react";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Promotions from "../../components/promotions/Promotions";
import PropertyList from "../../components/propertyList/PropertyList";
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
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <Promotions />
      </div>
    </div>
  );
};

export default Home;
