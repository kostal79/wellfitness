import React from "react";
import { NavLink } from "react-router-dom";
import { useGiveClassName } from "../../../hooks/useGiveClassName";

const SectionSupport = () => {
  const giveName = useGiveClassName()
  return (
    <section className="footer_menu">
      <h5 className="footer_menu-header">Поддержка</h5>
      <NavLink
        to={"/delivery"}
        className={(obj) => giveName({ ...obj, filter: "" })}
        end
      >
        Доставка и оплата
      </NavLink>
      <NavLink
        to={"/refound"}
        className={(obj) => giveName({ ...obj, filter: "" })}
        end
      >
        Условия возврата
      </NavLink>
      <NavLink
        to={"/servicerequest"}
        className={(obj) => giveName({ ...obj, filter: "" })}
        end
      >
        Сервисная заявка
      </NavLink>
      <NavLink
        to={"/fitnessclubsevrice"}
        className={(obj) => giveName({ ...obj, filter: "" })}
      >
        Обслуживание фитнес клубов
      </NavLink>
      <NavLink
        to={"/faq"}
        className={(obj) => giveName({ ...obj, filter: "" })}
      >
        FAQ
      </NavLink>
      <NavLink
        to={"/instructions"}
        className={(obj) => giveName({ ...obj, filter: "" })}
      >
        Инструкции
      </NavLink>
      <NavLink
        to={"/warranty"}
        className={(obj) => giveName({ ...obj, filter: "" })}
      >
        Гарантия
      </NavLink>
    </section>
  );
};

export default SectionSupport;
