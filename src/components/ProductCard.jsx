import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, description, image, status, price }) => {
  return (
    <div className="product-card">
      <div className="product-card__top">
        <div className="product-card__image">
          <img src={image} alt={name} />
        </div>
        <div className="product-card__text-area">
          <Link to={`/ads/${id}`}>
            <h3 className="product-card_title">{name}</h3>
          </Link>
          <p className="product-card_description">
            {description.slice(0, 115)}...
          </p>
        </div>
      </div>
      <div className="product-card__footer">
        <div className="product-card__rel-data">
          <span className="product-card__price">€ {price}</span>
          <span className="product-card__stock">{status}</span>
        </div>
        <div className="product-card__buttons">
          <Link to={`#`} className="product-card__cta button button-grey">
            Read more
          </Link>
          <Link
            to={`/ads/${id}`}
            className="product-card__cta button button-blue"
          >
            Manage ads
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
