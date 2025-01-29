import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter as Router, Routes, Route,  Navigate,} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useState } from "react";
// import { auth } from "./firebase/Firebase";
import Login from "./pages/UserLogin";
import Register from "./pages/UserRegistration";
// import Profile from "./pages/profile";
import SetupOrganization from "./pages/SetupOrganization";

function App() {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // });
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Routes>
          <Route path="/setup-organization" element={<SetupOrganization/> } />
        </Routes>
    </Router>
  );
}

export default App;
