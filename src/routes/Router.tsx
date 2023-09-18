import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Problem from "../pages/Problem";
import Admin from "../pages/Admin";

const PageRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/problem" />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
