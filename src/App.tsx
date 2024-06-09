import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default App;
