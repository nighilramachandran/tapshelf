import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./widgets/layouts/Layout";
import Inventory from "./pages/Inventory";
import Page404 from "./pages/Page404";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Inventory />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
