import "./App.css";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;
