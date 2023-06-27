import React from 'react';
import Styles from "./Policy.module.scss"
import { NavLink } from 'react-router-dom';

const Policy = () => {
    return (
      <NavLink to={"/private-policy"} className={Styles.link}>
          Политика конфиденциальности
      </NavLink>
    );
}

export default Policy