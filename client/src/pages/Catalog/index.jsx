import React, { useEffect, useState } from "react";
import Styles from "./Catalog.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import CompilationsSection from "../../components/CompilationsSection";
import ProductsSlider from "@components/Sliders/ProductsSlider";
import {getDevicesWithParams} from "@services/devicesAPI"


const Catalog = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const [devices, setDevices] = useState();

  // useEffect(() => {
  //   async function fetchData(){
  //     const arr = await getDevicesWithParams(queryParams);
  //     const content = arr.map(item => <p>{item?.name}</p>)
  //     setDevices(content)
  //   }
  //   fetchData();
  // }, [queryParams])

  return (
    <div className="wrapper">
        <Outlet />
        <CompilationsSection />
      <div className="limited-wrapper">
      {/* {devices} */}
        <ProductsSlider />
      </div>
    </div>
  );
};

export default Catalog;
