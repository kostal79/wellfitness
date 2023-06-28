import React from "react";
import "../Section.scss";
import { NavLink } from "react-router-dom";
import { useGiveClassName } from "../../../hooks/useGiveClassName";

const SectionCatalog = () => {
  const giveName = useGiveClassName();

  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">Каталог</h5>
      <ul className="list">
        <li className="list_item">
          <NavLink
            to={"/catalog?usage=home"}
            className={(obj) => giveName({ ...obj, filter: "usage=home" })}
            end
          >
            Для дома
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/catalog?usage=prof"}
            className={(obj) => giveName({ ...obj, filter: "usage=prof" })}
            end
          >
            Для фитнес клубов
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/catalog?sign_profit=true"}
            className={(obj) =>
              giveName({ ...obj, filter: "sign_profit=true" })
            }
            end
          >
            Акции
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/catalog?sign_new=true"}
            className={(obj) => giveName({ ...obj, filter: "sign_new=true" })}
          >
            Новинки
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={"/brands"}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Наши бренды
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default SectionCatalog;
