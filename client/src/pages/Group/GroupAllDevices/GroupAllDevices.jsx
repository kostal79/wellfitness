import React from "react";
import { defer, useLoaderData } from "react-router-dom";
import { getDevicesWithParams } from "@services/devicesAPI";
import ProductSection from "@components/ProductSection";
import { getTypesWithParams } from "../../../services/typesAPI";

const GroupAllDevices = () => {
  const { devices, typesIds } = useLoaderData();

  return <ProductSection devices={devices} typesIds={typesIds}/>;
};

export default GroupAllDevices;

async function getTypesIdsByGroup(groupId) {
  const types = await getTypesWithParams({group: groupId});
  const typesIds = types.map(type => type._id);
  return typesIds
}

export async function allGroupLoader({ params, request }) {
  const groupId = params.groupId;
  return defer({
    devices: getDevicesWithParams({ "group.group_id": groupId }),
    typesIds: getTypesIdsByGroup(groupId)
  });
}
