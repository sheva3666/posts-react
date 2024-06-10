import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { routes } from "./routes";
import "./App.css";

const App = () => (
  <>
    <Header />
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </>
);

export default App;
