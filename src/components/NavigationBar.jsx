import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Help, Plus } from "tabler-icons-react";
import CreateAdModal from "./CreateAdModal";

const NavigationBar = ({ pageTitle, createAd }) => {
  const [createModalVisibility, setCreateModalVisibility] = useState(false);
  const handleCreateModalVisibility = () =>
    setCreateModalVisibility(!createModalVisibility);

  let createAdModal;
  if (createModalVisibility) {
    createAdModal = (
      <CreateAdModal
        handleCreateModalVisibility={handleCreateModalVisibility}
        createAd={createAd}
      />
    );
  }

  const location = useLocation();
  let primaryButton;
  if (location.pathname.includes("ads")) {
    primaryButton = (
      <button
        className="navbar-top__right-button button button-m button-blue"
        onClick={() => handleCreateModalVisibility()}
      >
        <Plus size={18} strokeWidth={2} color={"#ffffff"} /> Create new ad
      </button>
    );
  }
  if (location.pathname === "/") {
    primaryButton = (
      <button className="navbar-top__right-button button button-m button-blue">
        <Plus size={18} strokeWidth={2} color={"#ffffff"} /> Create new product
      </button>
    );
  }
  return (
    <>
      <nav className="navbar-top">
        <div className="navbar-top__left">
          <div className="navbar-top__logo">
            <NavLink exact to="/">
              <img
                src={
                  "https://res.cloudinary.com/juligoodie/image/upload/v1627316817/talentbait/muscle-bait-logo_grahly.svg"
                }
                alt="MuscleBait"
                className="navbar-top__logo-img"
              />
              <span className="navbar-top__wordmark">MuscleBait</span>
            </NavLink>
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
      {createAdModal}
    </>
  );
};

export default NavigationBar;
