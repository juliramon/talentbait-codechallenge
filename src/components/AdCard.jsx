import React, { useState } from "react";
import { Dots, Edit, Trash } from "tabler-icons-react";

const AdCard = ({
  id,
  title,
  description,
  image,
  CTA,
  setAdToRemove,
  setAdToUpdate,
  handleRemoveModalVisibility,
  handleUpdateModalVisibility,
}) => {
  const pageData = {
    pageImage:
      "https://res.cloudinary.com/juligoodie/image/upload/v1627316817/talentbait/muscle-bait-logo_grahly.svg",
    pageUrl: "musclebait.com",
    pageName: "MuscleBait",
  };
  const [dropdown, setDropdown] = useState(false);
  const handleSettingsDropdown = () => setDropdown(!dropdown);

  if (typeof image === "object") {
    if (image.length === 0) {
      image = undefined;
    }
  }

  let settingsDropdown, adBody;
  if (dropdown) {
    settingsDropdown = (
      <div className="ad-card__settings-dropdown">
        <ul className="ad-card__settings-list">
          <li className="ad-card__settings-item">
            <button
              className="ad-card__settings-button button"
              onClick={() => {
                handleUpdateModalVisibility();
                setAdToUpdate(id);
              }}
            >
              <Edit size={24} strokeWidth={1.5} color={"black"} /> Edit ad
            </button>
          </li>
          <li className="ad-card__settings-item">
            <button
              className="ad-card__settings-button button"
              onClick={() => {
                handleRemoveModalVisibility();
                setAdToRemove(id);
              }}
            >
              <Trash size={24} strokeWidth={1.5} color={"black"} /> Remove ad
            </button>
          </li>
        </ul>
      </div>
    );
  }
  if (typeof image === "object" && image.length > 1) {
    const adBodyWrapper = image.map((el, idx) => (
      <div className="ad-card__multiple-wrapper" key={idx}>
        <figure className="ad-card__image">
          <img src={el} alt={title} />
        </figure>
        <div className="ad-card__content">
          <div className="ad-card__content-wrapper">
            <span className="ad-card__ad-domain">{pageData.pageUrl}</span>
            <span className="ad-card__ad-title">{title}</span>
            <span className="ad-card__ad-description">{description}</span>
          </div>
          <button className="ad-card__ad-cta button button-m button-grey">
            {CTA}
          </button>
        </div>
      </div>
    ));
    adBody = <div className="ad-card__multiple-images">{adBodyWrapper}</div>;
  } else {
    adBody = (
      <>
        <figure className="ad-card__image">
          <img src={image} alt={title} />
        </figure>
        <div className="ad-card__content">
          <div className="ad-card__content-wrapper">
            <span className="ad-card__ad-domain">{pageData.pageUrl}</span>
            <span className="ad-card__ad-title">{title}</span>
            <span className="ad-card__ad-description">{description}</span>
          </div>
          <button className="ad-card__ad-cta button button-m button-grey">
            {CTA}
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="ad-card">
        <div className="ad-card__top">
          <figure className="ad-card__page-image">
            <img src={pageData.pageImage} alt={pageData.pageName} />
          </figure>
          <div className="ad-card__page-details">
            <span className="ad-card__page-name">{pageData.pageName}</span>
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
        {adBody}
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
