import React, { memo } from "react";
import Styles from "./ProductCard.module.scss";

import { ReactComponent as DiscountSVG } from "@assets/svg/discount.svg";
import { ReactComponent as NewSVG } from "@assets/svg/new.svg";
import { ReactComponent as LikeSVG } from "@assets/svg/like.svg";
import { ReactComponent as BasketSVG } from "@assets/svg/basket.svg";
import UniversalButton from "@components/buttons/UniversalButton";
import Presence from "./Presence";
import Stars from "./Stars";
import InteractionIcons from "./InteractionIcons";
import { NavLink } from "react-router-dom";
import { CATALOG_PAGE } from "../../constants";

const ProductCard = ({
  id,
  name,
  imageRef,
  signProfit,
  signRecommend,
  signNew,
  isInShowroom,
  quantity,
  rating,
  currentPrice,
  oldPrice,
  isInComparison,
  isInFavorite,
}) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.marks}>
          {signProfit && <DiscountSVG />}
          {signRecommend && <LikeSVG />}
          {signNew && <NewSVG />}
        </div>
        <div className={Styles.icons}>
          <InteractionIcons
            isInComparison={isInComparison}
            isInFavorite={isInFavorite}
            id={id}
          />
        </div>
      </div>
      <NavLink to={`${CATALOG_PAGE}/${id}`}>
        <div className={Styles.imagebox}>
          <img className={Styles.image} src={imageRef} alt="product" />
        </div>
      </NavLink>
      <div className={Styles.info}>
        <div className={Styles["info_presence"]}>
          {<Presence quantity={quantity} />}
          {isInShowroom && (
            <p className={Styles["info_showroom"]}>Есть в шоу-руме</p>
          )}
        </div>
        <p className={Styles["info_name"]}>{name}</p>
        <div className={Styles["info_rating"]}>
          <p>Рейтинг</p>
          {<Stars rating={rating} />}
        </div>
        <div className={Styles["info_bottom"]}>
          <p className={Styles["info_price--current"]}>{currentPrice} ₽</p>
          <p className={Styles["info_price--old"]}>{oldPrice} ₽</p>
          <span className={Styles.button}>
            <UniversalButton
              text={
                <span>
                  <BasketSVG /> Купить
                </span>
              }
              styles="red-fill"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
