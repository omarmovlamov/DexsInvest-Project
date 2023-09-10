import "../styles/header.css";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

function Header() {
  const [state, setState] = useState({
    bottom: false,
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="bar-box"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <i className="fa-solid fa-x"></i>
      <div className="bar-links">
        <Link to="/howItWorks">How it works</Link>
        <Link to="/aboutUs">About us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/howItWorks">How it works</Link>
        <Link to="/aboutUs">About us</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="sign-up">
        <button>Sign Up</button>
      </div>
      <div className="burger">
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <i className="fa-solid fa-bars"></i>
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;

/*  */
