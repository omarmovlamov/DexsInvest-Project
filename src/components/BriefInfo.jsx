import "../styles/briefInfo.css";

function BriefInfo() {
  return (
    <div className="briefInfo">
      <div className="briefInfo-container">
        <div className="briefInfo-left">
          <h5>
            Investing might seem hard and you may think it requires a lot to get
            started. That’s why we created Easy Invest, a simple investing app
            that helps you invest with as little as $5 and gradually build a
            portfolio over time.
          </h5>
          <div>
            <p>
              Choose from several themed investment options and invest in
              companies you know, like tech giants and small businesses. We’ll
              help you along the way with practical tips and videos so you can
              learn all about the stock market.
            </p>
            <p>
              No matter your goals—a big house, a trip to Mars, or your kids’
              education—Easy Invest is here to help you reach them.
            </p>
          </div>
        </div>
        <div className="briefInfo-right">
          <div className="briefInfo-item">
            <div className="briefInfo-icon">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            <div className="briefInfo-text">
              <h3>Dexs to invest</h3>
              <p>
                You don’t need any educational background or experience or a lot
                of money to get started. With just $5, you can start investing
                in your favorite companies right now.
              </p>
            </div>
          </div>
          <div className="briefInfo-item">
            <div className="briefInfo-icon">
              <i className="fa-solid fa-folder-open"></i>
            </div>
            <div className="briefInfo-text">
              <h3>Diverse portfolios</h3>
              <p>
                Invest in stocks or ETFs of companies you know, build a
                diversified portfolio, and discover new investment opportunities
                every day. No commission required.
              </p>
            </div>
          </div>
          <div className="briefInfo-item">
            <div className="briefInfo-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="briefInfo-text">
              <h3>High security</h3>
              <p>
                We use 256-bit encryption to protect and secure your personal
                data to transaction history. Our cutting-edge security
                technologies are trusted by millions.
              </p>
            </div>
          </div>
          <div className="briefInfo-item">
            <div className="briefInfo-icon">
              <i className="fa-solid fa-user-check"></i>
            </div>
            <div className="briefInfo-text">
              <h3>Personal guidance</h3>
              <p>
                Get useful advice about finance and investment from our experts,
                specifically made for you. We guide you step by step so you can
                know how to reach your financial goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BriefInfo;
