import React from "react";
import Styles from "./GroupCard.module.scss";
import { loadImage } from "@utils/loadImage";
import { useGroupStatistic } from "@hooks/useGroupStatistic";
import TypeStatisticLine from "../TypeStatisticLine";
import GroupCardSceleton from "./GroupCardSceleton/GroupCardSceleton";

const GroupForHomeCards = ({ imageRef, group, usage }) => {
  const image = loadImage(imageRef);
  const [statisticData, isLoading] = useGroupStatistic(group, usage);

  return (
    <div className={Styles.container}>
      <div className={Styles["image-box"]}>
        <img className={Styles.image} src={image} alt={`group ${group}`} />
      </div>
      <div className={Styles.info}>
        <h5 className={Styles.title}>{group}</h5>
        <ul className={Styles.list}>
          {isLoading ? (
            <GroupCardSceleton />
          ) : (
            statisticData.map((data) => {
              return (
                <li className={Styles["list-item"]} key={data._id}>
                  <TypeStatisticLine
                    name={data.name}
                    quantity={data.devices_ids.length}
                    usage={usage}
                    typeId={data._id}
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
