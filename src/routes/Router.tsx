import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Problem from "../pages/Problem";
import { default as AdminProblem } from "../pages/admin-dashboard/Problem";
import { default as AdminCreateProblem } from "../pages/admin-dashboard/CreateProblem";
import AdminLayout from "../layouts/adminLayout/AdminLayout";
import ProblemList from "../pages/ProblemList";
import SubmissionList from "../pages/SubmissionList";
import Submission from "../pages/Submission";

const PageRouter: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate replace to="/problem" />} />
          <Route path="/problem" element={<ProblemList />} />
          <Route path="/problem/:slug" element={<Problem />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<Navigate replace to="/admin/problem" />} />
            <Route path="problem" element={<AdminProblem />} />
            <Route path="new/problem" element={<AdminCreateProblem />} />
            <Route path="user" element={<div>user</div>} />
          </Route>
          <Route path="/submission" element={<SubmissionList />} />
          <Route path="/submission/:uid" element={<Submission />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
