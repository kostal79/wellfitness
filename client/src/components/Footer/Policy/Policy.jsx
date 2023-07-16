import React from 'react';
import Styles from "./Policy.module.scss"
import { NavLink } from 'react-router-dom';
import { POLICY_PAGE } from '../../../constants';

const Policy = () => {
    return (
      <NavLink to={POLICY_PAGE} className={Styles.link}>
          Политика конфиденциальности
      </NavLink>
    );
}

export default Policy