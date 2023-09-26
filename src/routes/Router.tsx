import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Problem from "../pages/Problem";
import AdminProblem from "../pages/admin-dashboard/AdminProblem";
import AdminLayout from "../layouts/adminLayout/AdminLayout";

const PageRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate replace to="/problem" />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="problem" element={<AdminProblem />} />
            <Route path="user" element={<div>user</div>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
