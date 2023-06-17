import { Routes, Route } from "react-router-dom";

import { ProductView } from "../pages/pagesAdmin/ProductView";
import { Favorites } from "../pages/pagesAdmin/Favorites";
import { Home } from "../pages/pagesAdmin/Home";
import { Menu } from "../pages/pagesAdmin/Menu";
import { Requests } from "../pages/pagesAdmin/Requests";
import { NewDish } from "../pages/pagesAdmin/NewDish";
import { EditProduct } from "../pages/pagesAdmin/EditProduct";

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhe-do-produto/:id" element={<ProductView />} />
      <Route path="/favoritos" element={<Favorites />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/carrinho" element={<Requests />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editar-produto/:id" element={<EditProduct />} />
    </Routes>
  );
}
