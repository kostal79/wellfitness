import React from 'react';
import Styles from "./About.module.scss"
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
      <div>
          About
          <Outlet />
      </div>
    );
}

export default About