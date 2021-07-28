import React, { useState } from "react";
import { CameraPlus } from "tabler-icons-react";
import AdCard from "./AdCard";

const CreateAdModal = ({ handleCreateModalVisibility, createAd }) => {
  const initialFormState = {
    productId: "",
    title: "",
    description: "",
    images: [],
    CTA: "",
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
        images: [...state.images, URL.createObjectURL(fileToUpload)],
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const image = state.images[0];
    console.log(image);
    const { productId, title, description, CTA } = state;
    createAd(productId, title, description, CTA, image);
    handleCreateModalVisibility();
  };

  const imagesList = state.images.map((el, idx) => (
    <div className="ad-composer__images-list_image" key={idx}>
      <img src={el} alt="" />
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
                  name="title"
                  placeholder="Ad title"
                  className="ad-composer__form-control"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className="ad-composer__form-group">
                <label className="ad-composer__label">Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Ad description"
                  className="ad-composer__form-control"
                  autoComplete="off"
                  onChange={handleChange}
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
                  name="CTA"
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
                title={state.title}
                description={state.description}
                CTA={state.CTA}
                image={state.images[0]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdModal;
