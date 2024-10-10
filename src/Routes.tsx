import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./components/PageBase";
import Weather from "./Pages/Weather";

const RoutesUse = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Weather />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesUse;