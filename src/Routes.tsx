import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./components/PageBase";
import Weather from "./Pages/Weather";
import EveryOneApp from "./components/EveryOneApp";

const RoutesUse = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Weather />} />
          <Route path="everyoneapp" element={<EveryOneApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesUse;