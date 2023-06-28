import React from "react";
import { NavLink } from "react-router-dom";
import { useGiveClassName } from "../../../hooks/useGiveClassName";

const SectionSupport = () => {
  const giveName = useGiveClassName();
  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">Поддержка</h5>
      <ul className="list">
        <li className="list_item">
          <NavLink
            to={"/delivery"}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Доставка и оплата
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/refound"}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Условия возврата
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/servicerequest"}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Сервисная заявка
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/fitnessclubsevrice"}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Обслуживание фитнес клубов
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/faq"}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            FAQ
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/instructions"}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Инструкции
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/warranty"}
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
