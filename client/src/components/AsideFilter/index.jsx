import React from "react";
import Styles from "./AsideFilter.module.scss";
import FilterForm from "./FilterForm/FilterForm";
import { useDispatch, useSelector } from "react-redux";
import { isAsideModalActive, hideAsideModal } from "@redux/slices/modalSlices";
import { createPortal } from "react-dom";
import ModalWithCloseButton from "../modals/ModalWithCloseButton/ModalWithCloseButton";

const AsideFilter = () => {
  const isModalActive = useSelector(isAsideModalActive);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(hideAsideModal())
  }
  return (
    <div className={Styles.container}>
      <div className={Styles["aside--desktop"]}>
        <FilterForm />
      </div>
      {isModalActive &&
        createPortal(
          <ModalWithCloseButton onClose={onClose} isActive={isModalActive}>
            <FilterForm />
          </ModalWithCloseButton>
        , document.body)}
    </div>
  );
};

export default AsideFilter;
