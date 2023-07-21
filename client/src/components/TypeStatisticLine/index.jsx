import React from "react";
import Styles from "./TypeStatisticLine.module.scss";
import { NavLink } from "react-router-dom";
import { CATALOG_PAGE } from "../../constants";

const TypeStatisticLine = ({ name, quantity, usage, typeId, groupId }) => {
  const linkTo = `${CATALOG_PAGE}/${usage}/${groupId}/${typeId}`;
  return (
    <div className={Styles.container}>
      <NavLink to={linkTo}>
        <p className={Styles.name}>{name}</p>
      </NavLink>
      <p className={Styles.quantity}>{quantity}</p>
    </div>
  );
};

export default TypeStatisticLine;
