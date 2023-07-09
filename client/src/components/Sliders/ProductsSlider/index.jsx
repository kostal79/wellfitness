import React, { useEffect, useRef, useState } from "react";
import Styles from "./ProductsSlider.module.scss";
import FilterProduct from "./FilterProduct/FilterProduct";
import UniversalLink from "@components/buttons/UniversalLink";
import ProductSliderContent from "./ProductSliderContent/ProductSliderContent";
import { ReactComponent as LeftArrowSVG } from "@assets/svg/left-arrow.svg";
import { ReactComponent as RightArrowSVG } from "@assets/svg/right-arrow.svg";

const ProductsSlider = () => {
  const [parameter, setParameter] = useState("sign_profit");
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxLeft, setMaxLeft] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    setMaxLeft(prev => contentRef.current.scrollLeftMax)
    const handleScroll = () => {
      setScrollLeft(prev => contentRef.current.scrollLeft);
    };

    contentRef?.current.addEventListener("scroll", handleScroll);
    return () => {
      contentRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const slideRight = () => {
    contentRef.current.scrollLeft += contentRef.current.clientWidth / 2;
  };

  const slideLeft = () => {
    contentRef.current.scrollLeft -= contentRef.current.clientWidth / 2;
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <FilterProduct parameter={parameter} setParameter={setParameter} />
        <ProductSliderContent
          parameter={parameter}
          contentRef={contentRef}
        />
        <UniversalLink text="Все товары по акции" styles="red-empty" />
        {scrollLeft > 0 && (
          <div className={Styles["arrow-left"]} onClick={slideLeft}>
            <LeftArrowSVG />
          </div>
        )}
        {scrollLeft < maxLeft && (
          <div className={Styles["arrow-right"]} onClick={slideRight}>
            <RightArrowSVG />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsSlider;
