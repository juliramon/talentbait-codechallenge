import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout2 } from "tabler-icons-react";
import NavigationBar from "./NavigationBar";
import ProductCard from "./ProductCard";
import ToastNotification from "./ToastNotification";
import ProductFloatingPanel from "./ProductFloatingPanel";

const IndexView = ({ productsList }) => {
  const location = useLocation();

  const [toastVisibility, setToastVisibility] = useState(false);
  const handleToastVisibility = () => setToastVisibility(!toastVisibility);

  const [productPanelVisibility, setProductPanelVisibility] = useState(false);
  const [productToShowcase, setProductToShowcase] = useState(undefined);
  const handleProductPanelVisibility = () =>
    setProductPanelVisibility(!productPanelVisibility);

  const listOfProducts = productsList.map((el, idx) => (
    <ProductCard
      key={idx}
      id={el.productId}
      name={el.productName}
      description={el.productDescription}
      image={el.productImage}
      status={el.productStatus}
      price={el.price}
      handleProductPanelVisibility={handleProductPanelVisibility}
      setProductToShowcase={setProductToShowcase}
    />
  ));

  useEffect(() => {
    if (location.search === "?r=true") {
      setToastVisibility(true);
      setInterval(() => {
        setToastVisibility(false);
      }, 5000);
    }
  }, [location]);

  let toastNotification;
  if (toastVisibility) {
    toastNotification = (
      <ToastNotification handleToastVisibility={handleToastVisibility} />
    );
  }

  let productPanel;
  if (productPanelVisibility) {
    productPanel = (
      <ProductFloatingPanel
        productToShowcase={productToShowcase}
        handleProductPanelVisibility={handleProductPanelVisibility}
      />
    );
  }

  return (
    <>
      <NavigationBar pageTitle={"List of products"} />
      <main>
        {toastNotification}
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
            {productPanel}
          </div>
        </section>
      </main>
    </>
  );
};

export default IndexView;
