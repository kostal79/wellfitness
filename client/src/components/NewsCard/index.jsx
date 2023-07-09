import React from "react";
import Styles from "./NewsCard.module.scss";
import { NavLink } from "react-router-dom";

/**
 * @description News and blog card for main page
 * @param {string} imageRef image ref
 * @param {string} header title for card
 * @param {string} promotext short text
 * @param {date} date date of news
 * @returns
 */
const NewsCard = ({ id, imageRef, header, promotext, date }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles["image-box"]}>
        <NavLink to={`/news/${id}`}>
          <img className={Styles.image} src={imageRef} alt={header} />
        </NavLink>
      </div>
      <h5 className={Styles.title}>{header}</h5>
      <p className={Styles.promotext}>{promotext}</p>
      <p className={Styles.date}>{date}</p>
    </div>
  );
};

export default NewsCard;
