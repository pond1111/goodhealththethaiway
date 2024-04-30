import "./App.scss";
import Login from "./Components/Login/Login.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
// import Register from "./Components/Register/Register";

import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  );
}

export default App;
