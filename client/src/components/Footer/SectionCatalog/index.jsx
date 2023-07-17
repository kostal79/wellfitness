import React from "react";
import "../Section.scss";
import { NavLink } from "react-router-dom";
import { useGiveClassName } from "../../../hooks/useGiveClassName";
import { BRANDS_PAGE, CATALOG_PAGE_FOR_FITNESS_CENTER, CATALOG_PAGE_FOR_HOME, CATALOG_PAGE_NEW, CATALOG_PAGE_OFFER } from "../../../constants";

const SectionCatalog = () => {
  const giveName = useGiveClassName();

  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">Каталог</h5>
      <ul className="list">
        <li className="list_item">
          <NavLink
            to={CATALOG_PAGE_FOR_HOME}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Для дома
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={CATALOG_PAGE_FOR_FITNESS_CENTER}
            className={(obj) => giveName({ ...obj, filter: "" })}
            end
          >
            Для фитнес клубов
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={CATALOG_PAGE_OFFER}
            className={(obj) =>
              giveName({ ...obj, filter: "" })
            }
            end
          >
            Акции
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={CATALOG_PAGE_NEW}
            className={(obj) => giveName({ ...obj, filter: "" })}
          >
            Новинки
          </NavLink>
        </li>
        <li className="list_item">
          <NavLink
            to={BRANDS_PAGE}
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
