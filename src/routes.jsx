import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase/index.jsx";
import Inicio from "./pages/Inicio/index.jsx";
import NuevoVideo from "./pages/NuevoVideo/index.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path={"nuevo-video"} element={<NuevoVideo />}></Route>
          {/*<Route path="*" element={<NotFound />}></Route>*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/*
 <Route path={"/"} element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
 */
export default AppRoutes;
