import { Route, Routes, useLocation } from "react-router-dom";
import PlanetDetail from "../pages/PlanetDetail/PlanetDetail";
import Planets from "../pages/Planets/Planets";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route element={<Planets />} path="/" />
      <Route element={<PlanetDetail />} path="/:name" />
    </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
