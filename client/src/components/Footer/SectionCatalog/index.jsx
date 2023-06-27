import React from "react";
import "../Section.scss";
import { NavLink } from "react-router-dom";
import { useGiveClassName } from "../../../hooks/useGiveClassName";

const SectionCatalog = () => {
  const giveName = useGiveClassName()

  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">Каталог</h5>
      <NavLink
        to={"/catalog?use=home"}
        className={(obj) => giveName({ ...obj, filter: "use=home" })}
        end
      >
        Для дома
      </NavLink>
      <NavLink
        to={"/catalog?use=prof"}
        className={(obj) => giveName({ ...obj, filter: "use=prof" })}
        end
      >
        Для фитнес клубов
      </NavLink>
      <NavLink
        to={"/catalog?sign_profit=true"}
        className={(obj) => giveName({ ...obj, filter: "sign_profit=true" })}
        end
      >
        Акции
      </NavLink>
      <NavLink
        to={"/catalog?sign_new=true"}
        className={(obj) => giveName({ ...obj, filter: "sign_new=true" })}
      >
        Новинки
      </NavLink>
      <NavLink
        to={"/brands"}
        className={(obj) => giveName({...obj, filter: ""})}
      >
        Наши бренды
      </NavLink>
    </section>
  );
};

export default SectionCatalog;
