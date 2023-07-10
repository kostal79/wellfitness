import React from "react";
import Styles from "./Home.module.scss";
import BannerSlider from "@components/Sliders/BannerSlider";
import CategorySection from "./CategorySection";
import CompilationsSection from "./CompilationsSection";
import ProductsSlider from "@components/Sliders/ProductsSlider";
import BrandsSection from "./BrandSection";
import LinkCardsSection from "./LinkCardsSection";
import AboutSection from "./AboutSection";
import BecomePartnerSection from "./BecomePartnerSection";
import NewsSection from "./NewsSection";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="limited-wrapper">
          <div className={Styles.banner}>
            <BannerSlider />
          </div>
          <CategorySection title="Тренажеры для дома" usage="home"/>
          <CategorySection title="Для фитнес клубов" usage="prof"/>
        </div>
      </div>
      <ProductsSlider />
      <div className={Styles.compilations}>
        <CompilationsSection />
      </div>
      <div className="wrapper">
        <div className="limited-wrapper">
          <BrandsSection />
          <LinkCardsSection />
          <AboutSection />
          <BecomePartnerSection />
          <NewsSection />
        </div>
      </div>
    </>
  );
};

export default Home;
