import React from "react";
import { Link } from "react-router-dom";
import { Ad, Layout2 } from "tabler-icons-react";
import AdCard from "./AdCard";
import NavigationBar from "./NavigationBar";

const AdsView = ({ adsList }) => {
  const listOfAds = adsList.map((el, idx) => (
    <AdCard
      key={idx}
      id={el.adId}
      name={el.adTitle}
      description={el.adDescription}
      image={el.adImage}
      CTA={el.adCTA}
    />
  ));

  let adsSyntax;
  if (adsList.length > 1 || adsList.length === 0) {
    adsSyntax = "ads";
  } else {
    adsSyntax = "ad";
  }
  return (
    <>
      <NavigationBar />
      <main>
        <section className="panel">
          <div className="panel__left-col panel-white">
            <div className="panel__left-col__wrapper">
              <Link to={"/"} className="panel__left-panel-button button ">
                <Layout2 size={22} strokeWidth={2} /> List of products
              </Link>
              <Link
                to={"/ads"}
                className="panel__left-panel-button button button-active"
              >
                <Ad size={22} strokeWidth={2} /> List of ads
              </Link>
            </div>
          </div>
          <div className="panel__right-col panel-white">
            <div className="panel__right-col__top-bar">
              <span className="panel__right-col__items-ref">
                {adsList.length} {adsSyntax} listed
              </span>
            </div>
            <div className="panel__right-col__items">{listOfAds}</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdsView;
