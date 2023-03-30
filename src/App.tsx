import GlobalStyles from "./styles/globalStyles";
import AnimatedRoutes from "./router/AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContainer } from "./App.styled";

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Router>
      <AnimatedRoutes />
      </Router>
    </MainContainer>
  );
}

export default App;
