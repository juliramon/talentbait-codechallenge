import React, { useState } from "react";
import { AlertCircle, CameraPlus } from "tabler-icons-react";
import AdCard from "./AdCard";

const CreateAdModal = ({ handleCreateModalVisibility, createAd }) => {
  const initialFormState = {
    productId: "",
    adTitle: "",
    adDescription: "",
    adImage: [],
    adCTA: "",
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
    const { productId, adTitle, adDescription, adImage, adCTA } = state;
    if (
      productId === "" ||
      productId === "default" ||
      adTitle === "" ||
      adDescription === "" ||
      adImage.length === 0 ||
      adCTA === ""
    ) {
      setState({
        ...state,
        isMissingFields: true,
        validationError: "Please fill in all fields",
      });
    } else {
      createAd({ productId, adTitle, adDescription, adCTA, adImage });
      handleCreateModalVisibility();
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    const imagesList = state.adImage;
    imagesList.splice(e.target.id, 1);
    setState({ ...state, adImage: imagesList });
  };

  const imagesList = state.adImage.map((el, idx) => (
    <div className="ad-composer__images-list_image" key={idx}>
      <img src={el} alt="" name={idx} />
      <button
        className="ad-composer__images-list_button"
        onClick={handleRemoveImage}
        id={idx}
      >
        x
      </button>
    </div>
  ));

  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal modal-large ad-composer">
        <div className="modal-wrapper">
          <div className="modal-header">
            <h3 className="modal-header__title">Create a new ad</h3>
          </div>
          <div className="modal-body">
            <form className="ad-composer__form">
              {state.isMissingFields ? (
                <div className="ad-composer__error-validation">
                  <span className="ad-composer__error-message">
                    <AlertCircle size={20} strokeWidth={2.5} color={"white"} />{" "}
                    {state.validationError}
                  </span>
                </div>
              ) : null}
              <div className="ad-composer__form-group">
                <label className="ad-composer__label">
                  Product to promote{" "}
                  <span className="ad-composer__mandatory">*</span>
                </label>
                <select
                  value={state.productId}
                  className="ad-composer__form-control"
                  onChange={handleSelect}
                >
                  <option value="default">Select a product to promote</option>
                  <option value="0001">Good ol' Dumbbells</option>
                  <option value="0002">Evergrip Jump Rope</option>
                  <option value="0003">Durable Resistance band</option>
                </select>
              </div>
              <div className="ad-composer__form-group">
                <label className="ad-composer__label">
                  Title <span className="ad-composer__mandatory">*</span>
                </label>
                <input
                  type="text"
                  name="adTitle"
                  placeholder="Ad title"
                  className="ad-composer__form-control"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className="ad-composer__form-group">
                <label className="ad-composer__label">
                  Description <span className="ad-composer__mandatory">*</span>
                </label>
                <input
                  type="text"
                  name="adDescription"
                  placeholder="Ad description"
                  className="ad-composer__form-control"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className="ad-composer__form-group add-image">
                <label className="ad-composer__label">
                  Add Images <span className="ad-composer__mandatory">*</span>
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
                <label className="ad-composer__label">
                  Call to action{" "}
                  <span className="ad-composer__mandatory">*</span>
                </label>
                <input
                  type="text"
                  name="adCTA"
                  placeholder="Eg. Download now"
                  className="ad-composer__form-control"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className="ad-composer__buttons">
                <button
                  className="ad-composer__form-button button button-l button-grey"
                  onClick={handleCreateModalVisibility}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ad-composer__form-button button button-l button-blue"
                  onClick={handleSubmit}
                >
                  Create ad
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

export default CreateAdModal;
