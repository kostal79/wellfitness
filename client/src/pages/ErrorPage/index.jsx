import React from "react";
import Styles from "./ErrorPage.module.scss";
import UniversalButton from "../../components/buttons/UniversalButton";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => navigate("/", { replace: true });
  return (
    <div className={Styles.container}>
      <p className={Styles.text}>Извините, но мы не нашли эту страницу</p>
      <UniversalButton
        text="Вернуться на главную"
        click={clickHandler}
        styles="red-fill"
      />
    </div>
  );
};

export default ErrorPage;
