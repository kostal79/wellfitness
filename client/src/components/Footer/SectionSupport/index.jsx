import React from "react";
import { NavLink } from "react-router-dom";
import { useGiveClassName } from "../../../hooks/useGiveClassName";
import { DELIVERY_PAGE, FAQ_PAGE, FITNESS_CLUB_SERVICE_PAGE, INSTRUCTIONS_PAGE, REFOUND_PAGE, SERVICE_PAGE, WARRANTY_PAGE } from "../../../constants";

const SectionSupport = () => {
  const giveName = useGiveClassName();
  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">Поддержка</h5>
      <ul className="list">
        <li className="list_item">
          <NavLink
            to={DELIVERY_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Доставка и оплата
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={REFOUND_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Условия возврата
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={SERVICE_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Сервисная заявка
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={FITNESS_CLUB_SERVICE_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Обслуживание фитнес клубов
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={FAQ_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            FAQ
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={INSTRUCTIONS_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Инструкции
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={WARRANTY_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Гарантия
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default SectionSupport;
