import React from "react";
import Banner from "../../banner/Banner";
const FeedArea = () => {
  return (
    <div className="home__feedarea">
      <div className="banners">
        {" "}
        <Banner />
      </div>
      <div className="banners">
        {" "}
        <Banner />
      </div>
      <div className="banners">
        {" "}
        <Banner />
      </div>
      <div className="banners">
        {" "}
        <Banner />
      </div>
    </div>
  );
};

export default FeedArea;
