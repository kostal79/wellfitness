import React from "react";
import Styles from "./Breadscrumbs.module.scss";
import { useMatches } from "react-router-dom";

const Breadscrumbs = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match, index) => (
      <li className={Styles.list_item} key={index}>
        {match.handle.crumb(match?.data)}
      </li>
    ));
  return (
    <div className={Styles.container}>
      <ul className={Styles.list}>{crumbs}</ul>
    </div>
  );
};

export default Breadscrumbs;
