import React from "react";
import { Routes, Route } from "react-router-dom";
import BasePage from "./Pages/BasePage/BasePage";
import Home from "./Pages/Home/Home";
import NewVideo from "./Pages/NewVideo/NewVideo";
import NotFound from "./Pages/NotFound/NotFound"; // Ruta corregida

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BasePage />}>
        <Route index element={<Home />} />
        <Route path="new-video" element={<NewVideo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
