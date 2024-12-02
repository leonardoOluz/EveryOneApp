import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageBase from "./components/PageBase";
import ClimaTempo from "./Pages/ClimaTempo";

const RoutesUse = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<ClimaTempo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesUse;