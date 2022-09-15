import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utils/constants";
import { SliderWrapper } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, index }) => (
          <Route
            path={path}
            element={<SliderWrapper routeIndex={index} />}
            key={path}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
