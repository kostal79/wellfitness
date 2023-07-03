import React from "react";
import Styles from "./Home.module.scss";
import BannerSlider from "../../components/Sliders/BannerSlider";
import CategoriesHome from "../../components/CategoriesHome";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="limited-wrapper">
        <div className={Styles.banner}>
          <BannerSlider />
        </div>
        <CategoriesHome />
        <CategoriesHome />
      </div>
    </div>
  );
};

export default Home;
