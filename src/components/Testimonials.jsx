import React from "react";
import "../styles/testimonials.css";

function Testimonials() {
  return (
    <>
      <div className="t-header">
        <div className="t-left">
          <h2>Hear from hundreds of thousands of happy investors!</h2>
        </div>
        <div className="t-right"></div>
      </div>
      <div className="t-main">
        <div className="t-row ">
          <div className="t-item t-item-2">
            <h2>
              “I always said to myself, “Investing isn’t for me.” But step by
              step Dexs Invest took me to the world of investment. Watching my
              money grow every day is very exciting.”
            </h2>
            <p>—Nisa Y.</p>
          </div>
          <div className="t-item t-item-2">
            <h2>
              "Dexs Invest is the app I’ve always been looking for. It’s really
              useful for first-time investors like me.”
            </h2>
            <p>—Furkan Y.</p>
          </div>
        </div>
        <div className="t-row">
          <div className="t-item ">
            <h2>
              “Such an amazing app! Just after two months using Dexs Invest, I
              made $2,000! Thank you so much.”
            </h2>
            <p>—Omar Movlamov</p>
          </div>
        </div>
        <div className="t-row">
          <div className="t-item t-item-2">
            <h2>
              “I use many micro-investing apps, but Dexs Invest is the best!”
            </h2>
            <p>—Koku M.</p>
          </div>
          <div className="t-item t-item-2">
            <h2>
              “I love the ability to invest without paying any monthly fees. I
              can put the extra savings toward purchasing extra stocks.”
            </h2>
            <p>—Pınar Y.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
