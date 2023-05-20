import { Routes, Route } from "react-router-dom";

import { ProductDetail } from "../pages/pagesUsers/ProductDetail";
import { Favorites } from "../pages/pagesUsers/Favorites";
import { Home } from "../pages/pagesUsers/Home";
import { Menu } from "../pages/pagesUsers/Menu";
import { Requests } from "../pages/pagesUsers/Cart";
import { Payment } from "../pages/pagesUsers/Payment";
import { Historic } from "../pages/pagesUsers/Historic";

export function AppUsersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhe-do-produto/:id" element={<ProductDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/carrinho" element={<Requests />} />
      <Route path="/historic" element={<Historic />} />
    </Routes>
  );
}
