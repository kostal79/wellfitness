import React from "react";
import "../Section.scss";
import { NavLink } from "react-router-dom";
import { useGiveClassName } from "../../../hooks/useGiveClassName";

const SectionService = () => {
  const giveName = useGiveClassName()

  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">Услуги</h5>
      <NavLink
        to={"project3d"}
        className={(obj) => giveName({ ...obj, filter: "" })}
        end
      >
        3D проект
      </NavLink>
      <NavLink
        to={"consalting"}
        className={(obj) => giveName({ ...obj, filter: "" })}
        end
      >
        Консалтинг
      </NavLink>
      <NavLink
        to={"/bizplan"}
        className={(obj) => giveName({ ...obj, filter: "" })}
        end
      >
        Бизнес планирование 
      </NavLink>
      <NavLink
        to={"/lising"}
        className={(obj) => giveName({ ...obj, filter: "" })}
      >
        Лизинг
      </NavLink>
      <NavLink
        to={"/tradein"}
        className={(obj) => giveName({...obj, filter: ""})}
      >
        Trade-IN
      </NavLink>
      <NavLink
        to={"/credit"}
        className={(obj) => giveName({...obj, filter: ""})}
      >
        В рассрочку
      </NavLink>
    </section>
  );
};

export default SectionService;
