import "./promotions.css";
import React from "react";

const Promotions = () => {
  let countryInfo = [
    {
      countryName: "Dubai",
      propertyCount: 4278,
      url: "https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=",
    },
    {
      countryName: "Kuala Lumpur",
      propertyCount: 13421,
      url: "https://cf.bstatic.com/static/img/flags/24/ae/e5f54d8e1da0853393141831bcb0104381215a7e.png",
    },
    {
      countryName: "Las Vegas",
      propertyCount: 2543,
      url: "https://cf.bstatic.com/xdata/images/city/540x270/685532.webp?k=27f5778aebf08d8894506a031c18df7180c530a0937ad377c2b3ecaa540fe9f7&o=",
    },
    { countryName: "Kathmandu", propertyCount: 543 },
  ];
  return (
    <>
      <div className="largePromotion">
        <div className="largePromotionItem">
          {/* {countryInfo.forEach((element) => {
          ` <div className="promotionImgContainer">`;
        })} */}
          <div className="promotionImgContainer">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="
              alt=""
              className="promoImg"
            />
          </div>
          <div className="promoText">
            <h2 className="promoCountry">
              Dubai
              <img
                src="https://cf.bstatic.com/static/img/flags/24/ae/e5f54d8e1da0853393141831bcb0104381215a7e.png"
                alt=""
                className="promoLogo"
              />
            </h2>
            <h4 className="promoProperties">4,278 properties</h4>
          </div>
        </div>
        <div className="largePromotionItem">
          <div className="promotionImgContainer">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/654877.webp?k=bc70ebd827a40c515c962e565fbfa01b8621035ffd7eb024789a7fb171a0d292&o="
              alt=""
              className="promoImg"
            />
          </div>
          <div className="promoText">
            <h2 className="promoCountry">
              Sharaj
              <img
                src="https://cf.bstatic.com/static/img/flags/24/ae/e5f54d8e1da0853393141831bcb0104381215a7e.png"
                alt=""
                className="promoLogo"
              />
            </h2>
            <h4 className="promoProperties">134 properties</h4>
          </div>
        </div>
      </div>
      {/* Small destinations  */}
      <div className="smallPromotionContainer">
        <div className="smallPromotionItem"></div>
      </div>
    </>
  );
};

export default Promotions;
