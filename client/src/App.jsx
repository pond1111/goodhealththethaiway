import "./App.scss";
import Login from "./Components/Login/Login.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Register from "./Components/Register/Register";
import AdminLogin from "./Components/AdminLogin.jsx";
// import Adminregister from "./Components/Register/Adminregister";

import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          {/* <Route path="/Adminregister" element={<Adminregister/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
