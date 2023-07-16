import React from "react";
import "../Section.scss";
import { NavLink } from "react-router-dom";
import { useGiveClassName } from "../../../hooks/useGiveClassName";
import { BUSINESS_PLAN_PAGE, CONSALTING_PAGE, CREDIT_PAGE, LEASING_PAGE, PROJECT_3D_PAGE, TRANDIN_PAGE } from "../../../constants";

const SectionService = () => {
  const giveName = useGiveClassName();

  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">Услуги</h5>
      <ul className="list">
        <li className="list_item">
          <NavLink
            to={PROJECT_3D_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            3D проект
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={CONSALTING_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Консалтинг
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={BUSINESS_PLAN_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Бизнес планирование
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={LEASING_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Лизинг
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={TRANDIN_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Trade-IN
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={CREDIT_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            В рассрочку
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default SectionService;
