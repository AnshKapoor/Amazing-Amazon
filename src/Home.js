import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/Teaser_graphics/PC_Teaser_graphics/Rev/teaser_PC_Bunk_PEA_50._CB666229056_.jpg"
          alt="amazon-banner"
        />
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
