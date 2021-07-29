import React from "react";
import { Link } from "react-router-dom";

const ProductFloatingPanel = ({
  productToShowcase,
  handleProductPanelVisibility,
}) => {
  const { id, name, description, image, status, price } = productToShowcase;
  return (
    <div className="product-panel">
      <div className="product-panel__wrapper">
        <div className="product-panel__top">
          <div className="product-panel__image">
            <img src={image} alt={name} />
          </div>
          <h2 className="product-panel__name">{name}</h2>
          <p className="product-panel__description">{description}</p>
          <div className="product-panel__details">
            <span className="product-panel__price">€ {price}</span>
            <span className="product-panel__stock">{status}</span>
          </div>
        </div>
        <div className="product-panel__buttons">
          <button
            className="product-panel__button button button-l button-grey"
            onClick={handleProductPanelVisibility}
          >
            Close
          </button>
          <Link
            to={`/ads/${id}`}
            className="product-panel__button button button-l button-blue"
          >
            Manage ads
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductFloatingPanel;
