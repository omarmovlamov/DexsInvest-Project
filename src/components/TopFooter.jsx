import React from "react";
import "../styles/topFooter.css";

function TopFooter() {
  return (
    <div className="topFooter">
      <div className="topFooter-container">
        <div className="topFooter-left">
          <div className="topFooter-content">
            <h2>Real investing, real money</h2>
            <p>Start investing on mobile with our top-rated app today!</p>
          </div>
        </div>
        <div className="topFooter-right">
          <div className="box">
            <h2>+8K reviews on App Store and Google Play Store.</h2>
            <p>
              Over 3.5 million Americans use Dexs Invest to grow their money
            </p>
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
    </div>
  );
}

export default TopFooter;
