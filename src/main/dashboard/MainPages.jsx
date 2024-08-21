import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavBar from "./components/NavBar.jsx";
import "../../App.scss";
import DashBoard from "./board/DashBoard.jsx";
import Supplies from "./supplies/Supplies.jsx";
import Building from "./building/Building.jsx";
import Order from "./order/Order.jsx";
import NotFound from "../../widget/NotFound.jsx";
import ExcelToJsonConverter from "./excel/Excel.jsx";
import CreateBuilding from "./building/CreateBuilding.jsx";

const MainPages = () => {
  return (
    <>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/supplies" element={<Supplies />} />
        <Route path="/building" element={<Building />} />
        <Route path="/order" element={<Order />} />
        <Route path="/excel" element={<ExcelToJsonConverter />} />
        <Route path="/createBuilding" element={<CreateBuilding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default MainPages;
