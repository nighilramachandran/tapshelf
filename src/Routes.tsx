import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./widgets/layouts/Layout";
import Inventory from "./pages/Inventory";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Inventory />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
