import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Problem from "../pages/Problem";
import { default as AdminProblem } from "../pages/admin-dashboard/Problem";
import { default as AdminCreateProblem } from "../pages/admin-dashboard/CreateProblem";
import AdminLayout from "../layouts/adminLayout/AdminLayout";
import ProblemList from "../pages/ProblemList";

const PageRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate replace to="/problem" />} />
          <Route path="/problem" element={<ProblemList />} />
          <Route path="/problem/*" element={<Problem />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="problem" element={<AdminProblem />} />
            <Route path="new/problem" element={<AdminCreateProblem />} />
            <Route path="user" element={<div>user</div>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
