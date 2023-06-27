import React from 'react';
import Styles from "./SectionAbout.module.scss"
import { useGiveClassName } from '../../../hooks/useGiveClassName';
import { NavLink } from 'react-router-dom';

const SectionAbout = () => {
const giveName = useGiveClassName();

return (
  <section className="footer_menu">
    <h5 className="footer_menu-header">О компании</h5>
    <NavLink
      to={"/about"}
      className={(obj) => giveName({ ...obj, filter: "" })}
      end
    >
      О нас
    </NavLink>
    <NavLink
      to={"/about/mission"}
      className={(obj) => giveName({ ...obj, filter: "" })}
      end
    >
      Наша миссия
    </NavLink>
    <NavLink
      to={"/about/team"}
      className={(obj) => giveName({ ...obj, filter: "" })}
      end
    >
      Наша команда
    </NavLink>
    <NavLink
      to={"/about/projects"}
      className={(obj) => giveName({ ...obj, filter: "" })}
      end
    >
      Наши проекты
    </NavLink>
    <NavLink
      to={"/about/news"}
      className={(obj) => giveName({ ...obj, filter: "" })}
      end
    >
      Новости
    </NavLink>
    <NavLink
      to={"/blog"}
      className={(obj) => giveName({ ...obj, filter: "" })}
    >
      Блог
    </NavLink>
    <NavLink
      to={"/showrooms"}
      className={(obj) => giveName({ ...obj, filter: "" })}
    >
      Где купить
    </NavLink>
    <NavLink
      to={"/contacts"}
      className={(obj) => giveName({ ...obj, filter: "" })}
    >
      Контакты
    </NavLink>
  </section>
);
};


export default SectionAbout