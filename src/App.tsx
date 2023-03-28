import GlobalStyles from "./styles/globalStyles";
import AnimatedRoutes from "./router/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
      <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
