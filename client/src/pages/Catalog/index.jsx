import React, { useEffect, useState } from "react";
import Styles from "./Catalog.module.scss";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { get } from "../../services/api";
import { getDevices } from "../../services/deviceApi";

const Catalog = () => {
  const location = useLocation();
  const [devices, setDevices] = useState();
  
  useEffect(() => {
    (async () => {
      const data = await getDevices(location.search.toString());
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
