import React, { useEffect, useState } from "react";
import Styles from "./Catalog.module.scss";
import { useLocation } from "react-router-dom";
import { getDevices } from "@services/devicesApi";
import { getDevicesWithParams } from "../../services/devicesApi";

const Catalog = () => {
  const location = useLocation();
  const [devices, setDevices] = useState();
  
  useEffect(() => {
    (async () => {
      const data = await getDevicesWithParams();
      console.log(data);
      setDevices(data);
    })();
  }, [location.search]);

  return (
    <div>
      {devices?.map((device) => (
        <div key={device._id}>{device.name}</div>
      ))}
    </div>
  );
};

export default Catalog;
