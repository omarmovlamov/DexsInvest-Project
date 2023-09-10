import React from "react";
import "../styles/contact.css";
function Contact() {
  return (
    <div>
      <div className="t-header">
        <div className="t-left">
          <h2>Questions? We’re here to help!</h2>
          <p>
            Please use this form to tell us what you think of our app or if you
            have any questions.
          </p>
        </div>
        <div className="t-right">
          <div className="form">
            <form>
              <div className="contact-form">
                <label htmlFor="name">First Name:</label>
                <input
                  placeholder="First Name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="contact-form">
                <label htmlFor="email">Email:</label>
                <input
                  placeholder="Email address"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="contact-form">
                <label htmlFor="Comment">Comment:</label>
                <textarea
                  placeholder="Comment"
                  id="Comment"
                  name="Comment"
                  rows={6}
                />
              </div>
              <div className="send-button">
                <button type="submit">Contact Us</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
