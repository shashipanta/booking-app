import React from "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <div className="fpImgContainer">
          <img
            className="fpImg"
            src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
            alt="clean and white room"
          />
        </div>
        <span className="fpName">Hotel Mahadev</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span className="fpKeyword">Excellent</span>
          <span className="fpReviewNo">712 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <div className="fpImgContainer">
          <img
            className="fpImg"
            src="https://t-cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o="
            alt="clean and white room"
          />
        </div>
        <span className="fpName">Hotel Mahadev</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span className="fpKeyword">Wonderful</span>
          <span className="fpReviewNo">1,024 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <div className="fpImgContainer">
          <img
            className="fpImg"
            src="https://t-cf.bstatic.com/xdata/images/hotel/max500/7991107.jpg?k=b4c80a2ce0a0649879fc9e78efaadbc8be9bb79ae661aff7f37262ef872586a0&o="
            alt="clean and white room"
          />
        </div>
        <span className="fpName">Hotel Mahadev</span>
        <span className="fpCity">Kathmandu</span>
        <span className="fpPrice">Starting from $100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span className="fpKeyword">Exceptional</span>
          <span className="fpReviewNo">712 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
