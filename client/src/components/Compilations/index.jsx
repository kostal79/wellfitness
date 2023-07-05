import React, { useEffect, useRef } from "react";
import Styles from "./Compilations.module.scss";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import UniversalLink from "@components/buttons/UniversalLink";

const Compilations = () => {
  const bannersRef = useRef();
  const contentRef = useRef();

  const wheelHandler = (event) => {
    if (
      contentRef.current.scrollWidth >
        document.documentElement.offsetWidth + 2 ||
      (document.documentElement.offsetWidth > 1430 &&
        contentRef.current.scrollWidth > 1410)
    ) {
      event.preventDefault();
      bannersRef.current.scrollLeft += event.deltaY;
    }
  };
  useEffect(() => {
    bannersRef.current.addEventListener("wheel", wheelHandler, {
      passive: false,
    });
  }, []);

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <h3 className={Styles.title}>Идеи и подборки</h3>
        <div className={Styles.banners} ref={bannersRef}>
          <div className={Styles.content} ref={contentRef}>
            <FirstSection />
            <SecondSection />
            <FirstSection />
          </div>
        </div>
        <div className={Styles.button}>
          <UniversalLink
            text="Полная подборка"
            styles="white-empty"
            linkTo="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Compilations;
