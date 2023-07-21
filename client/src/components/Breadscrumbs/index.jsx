import React from "react";
import Styles from "./Breadscrumbs.module.scss";
import { Link, useLocation, useMatches } from "react-router-dom";

const Breadscrumbs = () => {
  const location = useLocation();
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match, index) => (
      <li className={Styles.list_item} key={index}>
        <Link to={match?.pathname}>{match.handle.crumb(match?.data)}</Link>
      </li>
    ));
  if (location.pathname !== "/") {
    return (
      <div className={Styles.container}>
        <ul className={Styles.list}>{crumbs}</ul>
      </div>
    );
  }
};

export default Breadscrumbs;
