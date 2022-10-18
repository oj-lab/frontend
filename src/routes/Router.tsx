import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignInSide from '../pages/SignInSide';
import Dashboard from '../pages/Dashboard';


const PageRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/Dashboard" />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/Dashboard" element={<Dashboard selectedItem="Dashboard" />} />
      </Routes>
    </Router>
  );
}

export default PageRouter;
