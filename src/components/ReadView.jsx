import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout2 } from "tabler-icons-react";
import AdCard from "./AdCard";
import RemoveConfirmationModal from "./RemoveConfirmationModal";

const ReadView = ({ adsList, removeAd }) => {
  const [removeModalVisibility, setRemoveModalVisibility] = useState(false);
  const [adToRemove, setAdToRemove] = useState(undefined);
  const handleRemoveModalVisibility = () =>
    setRemoveModalVisibility(!removeModalVisibility);
  const location = useLocation();
  const filteredAds = adsList.filter((ad) =>
    location.pathname.includes(ad.productId)
  );
  let adsSyntax;
  if (filteredAds.length > 1 || filteredAds.length === 0) {
    adsSyntax = "ads";
  } else {
    adsSyntax = "ad";
  }

  let listOfAds;
  if (filteredAds.length === 0) {
    listOfAds = (
      <div className="panel__right-col__no-items">
        <figure>
          <img
            src="https://res.cloudinary.com/juligoodie/image/upload/v1627470709/talentbait/10198642_odjj00.jpg"
            alt="No ads"
          />
        </figure>
        <p>There are no ads created for this product</p>
        <button className="button button-l button-blue">
          Create a new add
        </button>
      </div>
    );
  } else {
    listOfAds = filteredAds.map((el, idx) => (
      <AdCard
        key={idx}
        id={el.adId}
        title={el.adTitle}
        description={el.adDescription}
        image={el.adImage}
        status={el.adStatus}
        pageImage={el.pageImage}
        pageUrl={el.pageUrl}
        pageName={el.pageName}
        productId={el.productId}
        CTA={el.adCTA}
        handleRemoveModalVisibility={handleRemoveModalVisibility}
        setAdToRemove={setAdToRemove}
      />
    ));
  }

  let confirmationModal;
  if (removeModalVisibility) {
    confirmationModal = (
      <RemoveConfirmationModal
        removeAd={removeAd}
        handleRemoveModalVisibility={handleRemoveModalVisibility}
        adToRemove={adToRemove}
      />
    );
  }

  return (
    <>
      <main>
        <section className="panel">
          <div className="panel__left-col panel-white">
            <div className="panel__left-col__wrapper">
              <Link
                to={"/"}
                className="panel__left-panel-button button button-active"
              >
                <Layout2 size={22} strokeWidth={2} /> List of products
              </Link>
            </div>
          </div>
          <div className="panel__right-col panel-white">
            <div className="panel__right-col__top-bar">
              <span className="panel__right-col__items-ref">
                {filteredAds.length} {adsSyntax} listed
              </span>
            </div>
            <div className="panel__right-col__items">{listOfAds}</div>
          </div>
        </section>
      </main>
      {confirmationModal}
    </>
  );
};

export default ReadView;
