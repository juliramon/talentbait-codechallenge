import React, { useState } from "react";
import { Dots, Edit, Trash } from "tabler-icons-react";

const AdCard = ({
  id,
  pageImage,
  pageName,
  pageUrl,
  title,
  description,
  image,
  CTA,
  handleRemoveModalVisibility,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const handleSettingsDropdown = () => setDropdown(!dropdown);

  let settingsDropdown;
  if (dropdown) {
    settingsDropdown = (
      <div className="ad-card__settings-dropdown">
        <ul className="ad-card__settings-list">
          <li className="ad-card__settings-item">
            <button className="ad-card__settings-button button">
              <Edit size={24} strokeWidth={1.5} color={"black"} /> Edit ad
            </button>
          </li>
          <li className="ad-card__settings-item">
            <button
              className="ad-card__settings-button button"
              onClick={() => handleRemoveModalVisibility()}
            >
              <Trash size={24} strokeWidth={1.5} color={"black"} /> Remove ad
            </button>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <>
      <div className="ad-card">
        <div className="ad-card__top">
          <figure className="ad-card__page-image">
            <img src={pageImage} alt={pageName} />
          </figure>
          <div className="ad-card__page-details">
            <span className="ad-card__page-name">{pageName}</span>
            <span className="ad-card__page-ad">Sponsored</span>
          </div>
          <div
            className="ad-card__ad-settings"
            onClick={() => handleSettingsDropdown()}
          >
            <Dots size={24} strokeWidth={2} color={"#616770"} />
            {settingsDropdown}
          </div>
        </div>
        <div className="ad-card__post-content">
          <span className="ad-card__post-text">{title}</span>
        </div>
        <figure className="ad-card__image">
          <img src={image} alt={title} />
        </figure>
        <div className="ad-card__content">
          <div className="ad-card__content-wrapper">
            <span className="ad-card__ad-domain">{pageUrl}</span>
            <span className="ad-card__ad-title">{title}</span>
            <span className="ad-card__ad-description">{description}</span>
          </div>
          <button className="ad-card__ad-cta button button-m button-grey">
            {CTA}
          </button>
        </div>
        <div className="ad-card__actions">
          <button className="ad-card__like button">Like</button>
          <button className="ad-card__comment button">Comment</button>
          <button className="ad-card__share button">Share</button>
        </div>
      </div>
    </>
  );
};

export default AdCard;
