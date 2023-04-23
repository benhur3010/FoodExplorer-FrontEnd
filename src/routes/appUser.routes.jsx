import { Routes, Route } from "react-router-dom";

import { DishView } from "../pages/pagesUsers/DishView";
import { Favorites } from "../pages/pagesUsers/Favorites";
import { Home } from "../pages/pagesUsers/Home";
import { Menu } from "../pages/pagesUsers/Menu";
import { Requests } from "../pages/pagesUsers/Requests";
import { Payment } from "../pages/pagesUsers/Payment";
import { Historic } from "../pages/pagesUsers/Historic";

export function AppUsersRoutes () {
  return (
    <Routes>

      <Route path="/" element={ <Home/> }/>
      <Route path="/dishview/:id" element={ <DishView/> }/>
      <Route path="/favorites" element={ <Favorites/> }/>
      <Route path="/menu" element={ <Menu/> }/>
      <Route path="/payment" element={ <Payment/> }/>
      <Route path="/requests" element={ <Requests/> }/>
      <Route path="/historic" element={ <Historic/> }/>

    </Routes>
  )
}