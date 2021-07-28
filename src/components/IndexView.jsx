import React from "react";
import { Link } from "react-router-dom";
import { Layout2 } from "tabler-icons-react";
import ProductCard from "./ProductCard";

const IndexView = ({ productsList }) => {
  const listOfProducts = productsList.map((el, idx) => (
    <ProductCard
      key={idx}
      id={el.productId}
      name={el.productName}
      description={el.productDescription}
      image={el.productImage}
      status={el.productStatus}
      price={el.price}
    />
  ));
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
                {productsList.length} products listed
              </span>
            </div>
            <div className="panel__right-col__items">{listOfProducts}</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default IndexView;
