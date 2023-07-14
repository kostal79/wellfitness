import React, { memo, useEffect, useRef, useState } from "react";
import Styles from "./ProductSliderContent.module.scss";
import { ReactComponent as LeftArrowSVG } from "@assets/svg/left-arrow.svg";
import { ReactComponent as RightArrowSVG } from "@assets/svg/right-arrow.svg";

/**
 *
 * @param {array} content array of cards
 * @returns carusel of cards
 */
const ProductSliderContent = ({ content }) => {
  const contentRef = useRef();
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxLeft, setMaxLeft] = useState(0);

  useEffect(() => {
    const scrolled =
      contentRef.current.scrollWidth - contentRef.current.clientWidth;
    setMaxLeft(scrolled);
    const handleScroll = () => {
      setScrollLeft((prev) => contentRef.current.scrollLeft);
    };

    contentRef?.current.addEventListener("scroll", handleScroll);
    return () => {
      contentRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [contentRef.current]);

  useEffect(() => {
    const scrollToTop = () => {
      contentRef.current.scrollTop = 0;
    };
    scrollToTop();
  }, [content]);

  const slideRight = () => {
    contentRef.current.scrollLeft += contentRef.current.clientWidth / 2;
  };

  const slideLeft = () => {
    contentRef.current.scrollLeft -= contentRef.current.clientWidth / 2;
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.content} ref={contentRef}>
        <div className={Styles.slider}>{content}</div>
      </div>
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
  );
};

export default memo(ProductSliderContent);
