import React from "react";
import Styles from "./Home.module.scss";
import BannerSlider from "@components/Sliders/BannerSlider";
import CategoriesHome from "@components/CategoriesHome";
import Compilations from "@components/Compilations";
import ProductsSlider from "@components/Sliders/ProductsSlider";
import BrendsGrid from "@components/BrendsGrid";
import LinkCards from "./LinkCards";
import AboutSection from "./AboutSection";
import BecomePartner from "./BecomePartner";
import NewsSection from "./NewsSection";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="limited-wrapper">
          <div className={Styles.banner}>
            <BannerSlider />
          </div>
          <CategoriesHome />
          <CategoriesHome />
        </div>
      </div>
      <ProductsSlider />
      <div className={Styles.compilations}>
        <Compilations />
      </div>
      <div className="wrapper">
        <div className="limited-wrapper">
          <BrendsGrid />
          <LinkCards />
          <AboutSection />
          <BecomePartner />
          <NewsSection />
        </div>
      </div>
    </>
  );
};

export default Home;
