import React, { useState } from "react";
import Styles from "./Pagination.module.scss";
import { useLocation, useSearchParams } from "react-router-dom";

const Pagination = ({ totalPages, totalItems, limitPerPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const increaseLimitPerPage = () => {
    let limit = searchParams.get("limit")
      ? Number(searchParams.get("limit"))
      : limitPerPage;

    const newLimit =
      limit + limitPerPage < totalItems ? limit + limitPerPage : totalItems;
    searchParams.set("limit", limit + limitPerPage);
    setSearchParams(searchParams);
  };

  return (
    <div className={Styles.container}>
      <button
        className={Styles.button}
        onClick={increaseLimitPerPage}
        disabled={
          searchParams.get("limit") && searchParams.get("limit") >= totalItems
        }
        >
        Показать еще
      </button>
    </div>
  );
};

export default Pagination;
