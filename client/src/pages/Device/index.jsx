import React from 'react';
import Styles from "./Device.module.scss"
import { useLoaderData } from 'react-router-dom';

const Device = () => {
  const data = useLoaderData();
    return (
      <div>
          Device
      </div>
    );
}

export default Device