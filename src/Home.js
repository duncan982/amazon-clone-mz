import React from "react";
import "./Home.css";
// import homeimage from "images/homeimage.png";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //   src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          //   src={require("https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg")}
          //   src={
          //     "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          //   }
          //   src={require("images/homeimage.jpg")}
          src={"images/homeimage.png"}
          //   src="/images/homeimage.jpg"
          //   src="homeimage.png"
          alt="home page"
        />
      </div>
    </div>
  );
}

export default Home;
