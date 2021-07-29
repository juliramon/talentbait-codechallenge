import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout2 } from "tabler-icons-react";
import AdCard from "./AdCard";
import CreateAdModal from "./CreateAdModal";
import NavigationBar from "./NavigationBar";
import RemoveConfirmationModal from "./RemoveConfirmationModal";
import UpdateAdModal from "./UpdateAdModal";

const ReadView = ({ adsList, removeAd, createAd, updateAd }) => {
  const [adToRemove, setAdToRemove] = useState(undefined);
  const [adToUpdate, setAdToUpdate] = useState(undefined);
  const [removeModalVisibility, setRemoveModalVisibility] = useState(false);
  const handleRemoveModalVisibility = () =>
    setRemoveModalVisibility(!removeModalVisibility);
  const [createModalVisibility, setCreateModalVisibility] = useState(false);
  const handleCreateModalVisibility = () =>
    setCreateModalVisibility(!createModalVisibility);
  const [updateModalVisibility, setUpdateModalVisibility] = useState(false);
  const handleUpdateModalVisibility = () =>
    setUpdateModalVisibility(!updateModalVisibility);

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

  let createAdModal, updateAdModal;
  if (createModalVisibility) {
    createAdModal = (
      <CreateAdModal
        handleCreateModalVisibility={handleCreateModalVisibility}
        createAd={createAd}
      />
    );
  }

  if (updateModalVisibility) {
    updateAdModal = (
      <UpdateAdModal
        handleUpdateModalVisibility={handleUpdateModalVisibility}
        adToUpdate={adToUpdate}
        adsList={adsList}
        updateAd={updateAd}
      />
    );
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
        <button
          className="button button-l button-blue"
          onClick={handleCreateModalVisibility}
        >
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
        productId={el.productId}
        CTA={el.adCTA}
        setAdToRemove={setAdToRemove}
        setAdToUpdate={setAdToUpdate}
        handleRemoveModalVisibility={handleRemoveModalVisibility}
        handleUpdateModalVisibility={handleUpdateModalVisibility}
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
      <NavigationBar createAd={createAd} pageTitle={"List of ads"} />
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
      {createAdModal}
      {updateAdModal}
    </>
  );
};

export default ReadView;
