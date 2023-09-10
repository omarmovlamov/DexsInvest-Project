import React from "react";
import "../styles/aboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="about-header">
        <div className="a-left">
          <h1>We’re on a mission to help you invest in your future.</h1>
        </div>
        <div className="a-right"></div>
      </div>
      <div className="about-welcome">
        <div className="a-w-left">
          <img
            src="https://lh3.googleusercontent.com/PJk2BJAAtWNLjwK8Xrl0ppkofna6lY-49LhWFLJIaGI3LdVPF8fd4lpuzobL9EhHmyz4hP6XXUfQPdDxpGfZ=w497"
            alt="image"
          />
        </div>
        <div className="a-w-right">
          <div className="a-w-text">
            <h2>Welcome to Dexs Invest!</h2>
            <h5>
              Dexs Invest was founded in 1808 with a single mission: to help you
              invest in your future so you can live the life you want and make
              all your dreams come true.
            </h5>
            <p>
              Gone are the days when people didn’t invest due to a lack of
              financial literacy, expensive financial products, and soaring
              share prices that required people to invest thousands of dollars
              to purchase a fraction share of popular, high-performing stocks.
              With Dexs Invest, everyone has open access to the stock market and
              can start investing easily.
            </p>
            <p>
              We believe money isn’t just a number. It’s also a connection
              between you and the things you want. No matter how much money you
              have, we’re here to help you grow it.
            </p>
          </div>
        </div>
      </div>
      <div className="about-rating">
        <div className="rating-content">
          <div className="rating-item">
            <h4>1808</h4>
            <p>APP LAUNCHED</p>
          </div>
          <div className="rating-item">
            <h4>80.5M+</h4>
            <p>USERS</p>
          </div>
          <div className="rating-item">
            <h4>$99M</h4>
            <p>IN VC FUNDING</p>
          </div>
          <div className="rating-item">
            <h4>990+</h4>
            <p>TALENTED EMPLOYEES</p>
          </div>
        </div>
      </div>
      <div className="about-commitment">
        <div className="a-c-left">
          <div className="commitment-content">
            <h2>Our commitment</h2>
            <h4>
              We pride ourselves on building a better place for you to invest:
            </h4>
            <ul>
              <li>
                <span>✓ </span>We offer built-in safeguards for risky stocks.
              </li>
              <li>
                <span>✓ </span>We focus on your success.
              </li>
              <li>
                <span>✓ </span>We don’t allow day-trading.
              </li>
              <li>
                <span>✓ </span>We don’t sell you margin loans to invest with.
              </li>
              <li>
                <span>✓ </span>We don’t sell you exotic investment instruments.
              </li>
            </ul>
          </div>
        </div>
        <div className="a-c-right">
          <img
            src="https://lh3.googleusercontent.com/Srlk7HX7deFNsE_4uIO989kbVxkVujDIvrTrcZZawpD7PPCg4sqYMXxoiOATd7BWfK38CdTXv3TgKzubmfUE4w=w497"
            alt="image2"
          />
        </div>
      </div>
      <div className="topFooter">
        <div className="topFooter-container about-topFooter">
          <div className="topFooter-left">
            <div>
              <h2>It's time to invest!</h2>
            </div>
          </div>
          <div className="topFooter-right">
            <div className="topFooter-download-imgs">
              <img
                src="https://lh3.googleusercontent.com/vmUFeNO8g26d6rST4oPPIncs1Fbihi-5bpJT4jUXTa7vrV-RAYZEf795R6lgZ9z7D78YbYzbsSuu0BI3MOpV6A=s0"
                alt="App Store"
              />
              <img
                src="https://lh3.googleusercontent.com/InOFA-_PgS8ztb4V-nw1sitLFoFR6WaSV4GlTqTd2TA3qqGbxvvyUEwuf53nAbXCefZ0fvZweAPuJvyDS27tqA=s0"
                alt="Google Play"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
