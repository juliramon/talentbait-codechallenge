import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Layout2 } from "tabler-icons-react";
import ProductCard from "./ProductCard";
import ToastNotification from "./ToastNotification";

const IndexView = ({ productsList }) => {
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const [toastVisibility, setToastVisibility] = useState(false);
  const handleToastVisibility = () => setToastVisibility(!toastVisibility);
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

  useEffect(() => {
    if (location.search === "?r=true") {
      setToastVisibility(true);
      setInterval(() => {
        setToastVisibility(false);
        history.push("/");
      }, 5000);
    }
  }, [location, history]);

  let toastNotification;
  if (toastVisibility) {
    toastNotification = (
      <ToastNotification handleToastVisibility={handleToastVisibility} />
    );
  }
  return (
    <>
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
          </div>
        </section>
      </main>
    </>
  );
};

export default IndexView;
