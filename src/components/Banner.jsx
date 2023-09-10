import React from "react";
import "../styles/banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-left">
          <div className="banner-content">
            <h2>Invest today to change your financial future</h2>
            <h4>No account minimum, unlimited withdrawals</h4>
            <Link to="/contact">
              <button>Start Now</button>
            </Link>
          </div>
        </div>
        <div className="banner-right">
          <div className="banner-img-container">
            <div className="banner-img">
              <img
                src="https://lh3.googleusercontent.com/GuoiEZ6DxL5cATkRnFFeffAk92IRd1J2tLEmdXFhwMXQGd4nJIXq-Y3yoOWwTY2ZMEKit4cVSDklV10qIO2UqOU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
