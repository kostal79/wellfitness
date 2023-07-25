import React, { Suspense } from "react";
import Styles from "./Group.module.scss";
import { Await, Outlet, defer, useLoaderData } from "react-router-dom";
import { getGroupByID } from "@services/groupsAPI";
import { getTypesWithParams } from "@services/typesAPI";
import FilterButtons from "@components/buttons/FilterButtons/FilterButtons";
import Loader from "@components/Loader";

const Group = () => {
  const { groupName, typesArr } = useLoaderData();
  
  return (
    <div className="wrapper">
      <h1 className={Styles.title}>{groupName}</h1>
      <div className="limited-wrapper">
        <div className={Styles["types-filter"]}>
          <Suspense fallback={<Loader />}>
            <Await resolve={typesArr}>
              <FilterButtons />
              <Outlet />
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Group;

async function getGroupName(groupId) {
  const group = await getGroupByID(groupId);
  const groupName = group.name;
  return groupName;
}

export async function groupLoader({ request, params }) {

  return defer({
    groupName: await getGroupName(params.groupId),
    typesArr: getTypesWithParams({ group: params.groupId }),
  });
}
