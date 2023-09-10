import { Link } from "react-router-dom";
import "../styles/howItWorks.css";

function HowItWorks() {
  return (
    <>
      <div className="hiw-header">
        <h1>Investing has never been easier!</h1>
        <div className="hiw-header-items">
          <div className="hiw-col">
            <img
              src="https://lh3.googleusercontent.com/9QfHt8vXbmjLgMowElBgPmsZkeurlSSUDdDHTB6wjJuhV20DFghPw5kKSqSo1lumMv2-PUIA0E9x2lTy0jGSKg=s0"
              alt=""
            />
            <h5>Sign up</h5>
            <p>
              Install the app, sign up, link your bank, and then move money in
              so you have cash on hand to start investing. Hassle-free!
            </p>
          </div>
          <div className="hiw-col">
            <img
              src="https://lh3.googleusercontent.com/uKsEY1YBtLxUdhTqIEsYvXwIDILW5Hu_rYhrBfZmWlmo07fifREdmWlAAT4uaLcX9twFjSeaqoX-gkXAHCgW6w=s0"
              alt=""
            />
            <h5>Invest</h5>
            <p>
              Choose a theme and start investing in thousands of stocks and ETFs
              with $5. Buy and sell them whenever you want.
            </p>
          </div>
          <div className="hiw-col">
            <img
              src="https://lh3.googleusercontent.com/Z0uIoyM_EOnph1ZKCzlpFEaoPpfzagsRivfjKZS2tTiT0sxt8l7fJ9JS7X9TgSQaHs0iIdrnZIN_lN5IISjT=s0"
              alt=""
            />
            <h5>Track</h5>
            <p>
              Easily track stock prices and your money growth to change your
              investing strategy with an intuitive dashboard.
            </p>
          </div>
        </div>
      </div>
      <div className="hiw-themes">
        <h2>Investing themes</h2>
        <div className="themes-items">
          <div className="telecom themes-item">
            <h3>Telecom</h3>
            <p>
              Invest in companies that are powering communication and
              information technology. AT&T, Nokia, Sprint, Verizon, Baidu, you
              name it.
            </p>
          </div>
          <div className="home-garden themes-item">
            <h3>Home & garden</h3>
            <p>
              Stocks include Sonos, Amazon, Home Depot, Whirlpool, Berkshire
              Hathaway, Peloton, Casper Sleep.
            </p>
          </div>
          <div className="wearables themes-item">
            <h3>Wearables</h3>
            <p>
              Interested in wearable companies? Then, invest in Qualcomm,
              Dexcom, Apple, Logitech, Microsoft, Fitbit. The sky’s the limit.
            </p>
          </div>
        </div>
        <div className="themes-button">
          <button>Explore all themes</button>
        </div>
      </div>
      <div className="faqs">
        <div className="faqs-left">
          <div>
            <i className="fa-solid fa-circle-question"></i>
            <h2>FAQS</h2>
          </div>
        </div>
        <div className="faqs-right">
          <div className="faqs-right-content">
            <h3>1. Which stocks do you offer?</h3>
            <p>
              You’re provided with more than 1000 stocks and ETFs, including
              stocks in the S&P 500. Search for stocks by industry or company
              name or stock symbol.
            </p>

            <h3>2. How do I fund my account?</h3>
            <p>
              There are two ways to move cash between your Dexs Invest account
              and your bank account.
            </p>
            <p>
              Linked bank (free of charge). It takes 3 business days for the
              cash to show up in your Dexs Invest account.
            </p>
            <p>Debit card. Move cash in instantly for a small fee. </p>
            <h3>3. Do I need to pay any monthly fee?</h3>
            <p>
              No! You don’t have to pay any monthly fees to create and maintain
              your Dexs Invest account.
            </p>
            <h3>4. Can I withdraw money from my Dexs Invest account?</h3>
            <p>
              Yes, you can initiate a withdrawal at any time you want. It can
              take a few days for the cash to reach your chosen bank account.
            </p>
          </div>
        </div>
      </div>
      <div className="topFooter">
        <div className="topFooter-container hiw-topFooter">
          <div className="topFooter-left">
            <div>
              <h2>Everyone can be an investor</h2>
            </div>
          </div>
          <div className="topFooter-right">
            <div className="topFooter-button">
              <Link to="/contact">
                <button>Invest Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
