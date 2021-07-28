import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Help, Plus } from "tabler-icons-react";

const NavigationBar = ({ pageTitle }) => {
  const location = useLocation();
  let primaryButton;
  if (location.pathname.includes("ads")) {
    primaryButton = (
      <button className="navbar-top__right-button button button-m button-blue">
        <Plus size={18} strokeWidth={2} color={"#ffffff"} /> Create a new ad
      </button>
    );
  }
  if (location.pathname === "/") {
    primaryButton = (
      <button className="navbar-top__right-button button button-m button-blue">
        <Plus size={18} strokeWidth={2} color={"#ffffff"} /> Create a new
        product
      </button>
    );
  }
  return (
    <nav className="navbar-top">
      <div className="navbar-top__left">
        <div className="navbar-top__logo">
          <Link to="/">
            <span className="navbar-top__wordmark">MuscleBait</span>
          </Link>
          <span className="navbar-top__page-title">{pageTitle}</span>
        </div>
      </div>
      <div className="navbar-top__right">
        <div className="navbar-top__right-items">
          <button className="navbar-top__right-button button button-m button-grey">
            <Help size={18} strokeWidth={2} color={"#444444"} />
            Need help?
          </button>
          {primaryButton}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
