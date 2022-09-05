import FilledButton from "../ui/buttons/FilledButton";
import "./searchItem.css";

const SearchItem = () => {
  const ratingStars = [];
  const starElement = (
    <svg
      className="siRatingStar"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path>
    </svg>
  );

  for (let i = 0; i < 4; i++) {
    ratingStars.push(starElement);
  }

  return (
    <div className="searchItem">
      <div className="siImgContainer">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/349433113.jpg?k=475a7e2bc02967d14ca289ffbdb3d55ad1fe09d0a0cc93158c7ad76be24da1d6&o=&hp=1"
          alt=""
          srcset=""
          className="siImg"
        />
        <span className="heartShape">
          <svg viewBox="0 0 128 128" width="1em" height="1em">
            <path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"></path>
          </svg>
        </span>
      </div>
      <div className="siDesc">
        <h1 className="siTitle">Kantipur Village</h1>
        <div className="siStarRatingContainer">{ratingStars}</div>
        <a href="#" className="siLinks">
          <span className="siDistance">1.9 m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
        </a>
        <span className="siInfo">
          Located in Kathmandu, a 12-minute walk from Hanuman Dhoka, Kantipur
          Village has accommodations with a restaurant, free private parking, a
          bar and a shared lounge.
        </span>
        {/* 
          <span className="siFeatures">
            Entire studio + 1 bathroom + 21m <sup>2</sup> full bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        */}
      </div>
      <div className="siDetails">
        <div className="siReview">
          <span className="siReviewTitle">Very Good</span>
          <span className="siTotalReview">159 reviews</span>
          <div className="siReviewBtn">8.1</div>
        </div>
        <div className="siReviewNext">
          <button className="siShowPriceBtn">Show prices</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
