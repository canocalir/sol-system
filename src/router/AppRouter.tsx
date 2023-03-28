import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetDetail from "../pages/PlanetDetail/PlanetDetail";
import Planets from "../pages/Planets/Planets";

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Planets />} path="/" />
        <Route element={<PlanetDetail />} path="/:name" />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default AppRouter;
