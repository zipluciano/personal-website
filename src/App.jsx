import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SliderWrapper } from "./pages";

export const routes = [
  { path: "/", index: 0 },
  { path: "/home", index: 0 },
  { path: "/summary", index: 1 },
  { path: "/background", index: 2 },
  { path: "/skills", index: 3 },
  { path: "/contact", index: 4 },
];

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
