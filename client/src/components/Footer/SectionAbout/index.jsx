import React from "react";
import  "../Section.scss";
import { useGiveClassName } from "../../../hooks/useGiveClassName";
import { NavLink } from "react-router-dom";

const SectionAbout = () => {
  const giveName = useGiveClassName();

  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">О компании</h5>
      <ul className="list">
        <li className="list_item">
          <NavLink
            to={"/about"}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            О нас
          </NavLink>
        </li>
      </ul>
      <li className="list_item">
        <NavLink
          to={"/about/mission"}
          className={(obj) => giveName({ ...obj, filter: "" })}
          end
        >
          Наша миссия
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={"/about/team"}
          className={(obj) => giveName({ ...obj, filter: "" })}
          end
        >
          Наша команда
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={"/about/projects"}
          className={(obj) => giveName({ ...obj, filter: "" })}
          end
        >
          Наши проекты
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={"/about/news"}
          className={(obj) => giveName({ ...obj, filter: "" })}
          end
        >
          Новости
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={"/blog"}
          className={(obj) => giveName({ ...obj, filter: "" })}
        >
          Блог
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={"/showrooms"}
          className={(obj) => giveName({ ...obj, filter: "" })}
        >
          Где купить
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={"/contacts"}
          className={(obj) => giveName({ ...obj, filter: "" })}
        >
          Контакты
        </NavLink>
      </li>
    </section>
  );
};

export default SectionAbout;
