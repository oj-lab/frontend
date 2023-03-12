import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignInSide from "../pages/SignInSide";
import Dashboard from "../pages/Dashboard";
import Problem from "../pages/Problem";

const PageRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/Dashboard" />} />
        <Route path="/login" element={<SignInSide />} />
        <Route
          path="/dashboard"
          element={<Dashboard selectedItem="Dashboard" />}
        />
        <Route path="/problems/:pid" element={<Problem />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
