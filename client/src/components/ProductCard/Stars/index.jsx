import React from "react";
import { ReactComponent as StarSVG } from "@assets/svg/star.svg";
import { ReactComponent as StarEmptySVG } from "@assets/svg/star-empty.svg";

const Stars = ({rating}) => {
  const starsArray = [];
  for (let i = 0; i < rating; i++) {
    starsArray.push(<StarSVG key={`rating${i}`}/>);
  }

  for (let i = 0; i < 5 - rating; i++) {
    starsArray.push(<StarEmptySVG key={`rating-empty${i}`}/>);
  }
  return starsArray;
};

export default Stars;
