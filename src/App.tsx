import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import { MainContainer } from "./App.styled";
import Spinner from "./components/Spinner/Spinner";
const AnimatedRoutes = lazy(() => import("./router/AnimatedRoutes"));

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Router>
        <Suspense fallback={<Spinner/>}>
          <AnimatedRoutes />
        </Suspense>
      </Router>
    </MainContainer>
  );
}

export default App;
