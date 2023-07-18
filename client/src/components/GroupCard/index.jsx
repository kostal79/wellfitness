import React from "react";
import Styles from "./GroupCard.module.scss";
import { loadImage } from "@utils/loadImage";
import { useGroupStatistic } from "@hooks/useGroupStatistic";
import TypeStatisticLine from "../TypeStatisticLine";
import GroupCardSceleton from "./GroupCardSceleton/GroupCardSceleton";
import { NavLink } from "react-router-dom";

const GroupForHomeCards = ({ imageRef, groupName, usage }) => {
  const image = loadImage(imageRef);
  const [statisticData, isLoading] = useGroupStatistic(groupName, usage);

  return (
    <div className={Styles.container}>
      <NavLink to={statisticData.groupId}>
        <div className={Styles["image-box"]}>
          <img
            className={Styles.image}
            src={image}
            alt={`group ${groupName}`}
          />
        </div>
      </NavLink>
      <div className={Styles.info}>
        <NavLink to={statisticData && statisticData.groupId}>
          <h5 className={Styles.title}>{groupName}</h5>
        </NavLink>
        <ul className={Styles.list}>
          {isLoading ? (
            <GroupCardSceleton />
          ) : (
            statisticData.statistic.map((data) => {
              return (
                <li className={Styles["list-item"]} key={data._id}>
                  <TypeStatisticLine
                    name={data.name}
                    quantity={data.devices_ids.length}
                    usage={usage}
                    typeId={data._id}
                    groupId={data.group._id}
                  />
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default GroupForHomeCards;
