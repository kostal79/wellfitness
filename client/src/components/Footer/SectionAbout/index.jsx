import React from "react";
import  "../Section.scss";
import { useGiveClassName } from "../../../hooks/useGiveClassName";
import { NavLink } from "react-router-dom";
import { ABOUT_PAGE, BLOG_PAGE, CONTACTS_PAGE, MISSION_PAGE, NEWS_PAGE, OUT_PROJECTS_PAGE, SHOWROOMS_PAGE, TEAM_PAGE } from "../../../constants";

const SectionAbout = () => {
  const giveName = useGiveClassName();

  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">О компании</h5>
      <ul className="list">
        <li className="list_item">
          <NavLink
            to={ABOUT_PAGE}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            О нас
          </NavLink>
        </li>
      </ul>
      <li className="list_item">
        <NavLink
          to={MISSION_PAGE}
          className={(obj) => giveName({ ...obj, filter: "" })}
          end
        >
          Наша миссия
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={TEAM_PAGE}
          className={(obj) => giveName({ ...obj, filter: "" })}
          end
        >
          Наша команда
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={OUT_PROJECTS_PAGE}
          className={(obj) => giveName({ ...obj, filter: "" })}
          end
        >
          Наши проекты
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={NEWS_PAGE}
          className={(obj) => giveName({ ...obj, filter: "" })}
          end
        >
          Новости
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={BLOG_PAGE}
          className={(obj) => giveName({ ...obj, filter: "" })}
        >
          Блог
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={SHOWROOMS_PAGE}
          className={(obj) => giveName({ ...obj, filter: "" })}
        >
          Где купить
        </NavLink>
      </li>
      <li className="list_item">
        <NavLink
          to={CONTACTS_PAGE}
          className={(obj) => giveName({ ...obj, filter: "" })}
        >
          Контакты
        </NavLink>
      </li>
    </section>
  );
};

export default SectionAbout;
