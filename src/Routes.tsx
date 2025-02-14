import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SuspenseLazy from "./components/SuspenseLazy/SuspenseLazy";
import PageBase from "./components/PageBase";

const Home = lazy(() => import("./Pages/Home"));
const ClimaTempo = lazy(() => import("./Pages/ClimaTempo"));
const WordHours = lazy(() => import("./Pages/HoursWorld"));
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

const RoutesUse = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<SuspenseLazy><Home /></SuspenseLazy>} />
          <Route path="clima-tempo" element={<SuspenseLazy><ClimaTempo /></SuspenseLazy>} />
          <Route path="hours-world" element={<SuspenseLazy><WordHours /></SuspenseLazy>} />
          <Route path="*" element={<SuspenseLazy><NotFound /></SuspenseLazy>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesUse;