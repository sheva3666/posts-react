import "./App.css";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
