import React from 'react';
import Styles from "./MidRight.module.scss"
import Burger from "./Burger";
import BasketIcon from "./BasketIcon";
import FavoriteIcon from "./FavoriteIcon";
import CompareIcon from "./CompareIcon";

const MidRight = () => {
    return (
      <div className={Styles["right-side"]}>
        <div className={Styles.icons}>
          <div className={Styles.hide}>
            <CompareIcon quantity={8} />
          </div>
          <div className={Styles.hide}>
            <FavoriteIcon quantity={15} />
          </div>
          <div className={Styles.basket}>
            <BasketIcon quantity={1} />
          </div>
        </div>
        <div className={Styles.burger}>
          <Burger />
        </div>
      </div>
    );
}

export default MidRight