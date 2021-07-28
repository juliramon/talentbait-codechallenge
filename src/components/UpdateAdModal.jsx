import React, { useState } from "react";
import { CameraPlus } from "tabler-icons-react";
import AdCard from "./AdCard";

const UpdateAdModal = ({
  handleUpdateModalVisibility,
  adToUpdate,
  adsList,
  updateAd,
}) => {
  const filteredAd = adsList.filter((ad) => ad.adId === adToUpdate);
  console.log(filteredAd);
  const initialFormState = {
    productId: filteredAd[0].productId,
    adTitle: filteredAd[0].adTitle,
    adDescription: filteredAd[0].adDescription,
    adImage: filteredAd[0].adImage,
    adCTA: filteredAd[0].adCTA,
  };
  const [state, setState] = useState(initialFormState);
  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });
  const handleSelect = (e) => {
    setState({ ...state, productId: e.target.value });
  };
  const saveFileToStatus = (e) => {
    if (e.target.files.length !== 0) {
      const fileToUpload = e.target.files[0];
      setState({
        ...state,
        adImage: [...state.adImage, URL.createObjectURL(fileToUpload)],
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { adId } = filteredAd[0];
    const { productId, adTitle, adDescription, adCTA, adImage } = state;
    updateAd({ adId, productId, adTitle, adDescription, adCTA, adImage });
    handleUpdateModalVisibility();
  };

  let imagesList;
  if (typeof state.images === Object) {
    imagesList = state.adImage.map((el, idx) => (
      <div className="ad-composer__images-list_image" key={idx}>
        <img src={el} alt="" />
      </div>
    ));
  } else {
    imagesList = (
      <div className="ad-composer__images-list_image">
        <img src={state.adImage} alt="" />
      </div>
    );
  }

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal modal-large ad-composer">
        <div className="modal-wrapper">
          <div className="modal-header">
            <h3 className="modal-header__title">Edit your ad</h3>
          </div>
          <div className="modal-body">
            <form className="ad-composer__form">
              <div className="ad-composer__form-group">
                <label className="ad-composer__label">Product to promote</label>
                <select
                  value={state.productId}
                  className="ad-composer__form-control"
                  onChange={handleSelect}
                >
                  <option value="0001">Good ol' Dumbbells</option>
                  <option value="0002">Evergrip Jump Rope</option>
                  <option value="0003">Durable Resistance band</option>
                </select>
              </div>
              <div className="ad-composer__form-group">
                <label className="ad-composer__label">Title</label>
                <input
                  type="text"
                  name="adTitle"
                  placeholder="Ad title"
                  className="ad-composer__form-control"
                  autoComplete="off"
                  onChange={handleChange}
                  value={state.adTitle}
                />
              </div>
              <div className="ad-composer__form-group">
                <label className="ad-composer__label">Description</label>
                <input
                  type="text"
                  name="adDescription"
                  placeholder="Ad description"
                  className="ad-composer__form-control"
                  autoComplete="off"
                  onChange={handleChange}
                  value={state.adDescription}
                />
              </div>
              <div className="ad-composer__form-group add-image">
                <label className="ad-composer__label">
                  Add Images
                  <div className="ad-composer__add-image-wrapper">
                    <div className="ad-composer__add-image_top-bar">
                      <div className="ad-composer__add-image_drop-zone">
                        <label className="ad-composer__label">
                          <CameraPlus
                            size={22}
                            strokeWidth={1.5}
                            color={"#444444"}
                          />
                          Add images
                          <input
                            type="file"
                            className="ad-composer__form-control"
                            onChange={saveFileToStatus}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="ad-composer__images-list">
                      <div className="ad-composer__images-wrapper">
                        {imagesList}
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="ad-composer__form-group">
                <label className="ad-composer__label">Call to action</label>
                <input
                  type="text"
                  name="adCTA"
                  placeholder="Eg. Download now"
                  className="ad-composer__form-control"
                  autoComplete="off"
                  onChange={handleChange}
                  value={state.adCTA}
                />
              </div>
              <div className="ad-composer__buttons">
                <button
                  className="ad-composer__form-button button button-l button-grey"
                  onClick={handleUpdateModalVisibility}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ad-composer__form-button button button-l button-blue"
                  onClick={handleSubmit}
                >
                  Update ad
                </button>
              </div>
            </form>
            <div className="ad-composer__preview">
              <AdCard
                pageImage={
                  "https://res.cloudinary.com/juligoodie/image/upload/v1627316817/talentbait/muscle-bait-logo_grahly.svg"
                }
                pageName={"MuscleBait.com"}
                pageUrl={"musclebait.com"}
                title={state.adTitle}
                description={state.adDescription}
                CTA={state.adCTA}
                image={state.adImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateAdModal;
