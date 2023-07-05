import React from "react";
import Styles from "./InteractionIcons.module.scss";
import { ReactComponent as CompareSVG } from "@assets/svg/compare.svg";
import { ReactComponent as CompareRedSVG } from "@assets/svg/compare-red.svg";
import { ReactComponent as HeartRedSVG } from "@assets/svg/heart-red.svg";
import { ReactComponent as HeartSVG } from "@assets/svg/heart.svg";

const InteractionIcons = ({ isInComparison, isInFavorite, id }) => {
  return (
    <>
      {isInComparison ? (
        <span onClick={() => console.log("remove from coparison")}>
          <CompareRedSVG className={Styles["icon--active"]} />
        </span>
      ) : (
        <span onClick={() => console.log("add to comparisson")}>
          <CompareSVG className={Styles.icon} />
        </span>
      )}
      {isInFavorite ? (
        <span onClick={() => console.log("remove from favorite")}>
          <HeartRedSVG className={Styles["icon--active"]} />
        </span>
      ) : (
        <span onClick={() => console.log("add to favorite")}>
          <HeartSVG className={Styles.icon} />
        </span>
      )}
    </>
  );
};

export default InteractionIcons;
