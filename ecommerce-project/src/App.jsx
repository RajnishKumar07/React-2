import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
    </Routes>
  );
}

export default App;
