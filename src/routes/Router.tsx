import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Problem from "../pages/Problem";
import { default as AdminProblemList } from "../pages/admin-dashboard/ProblemList";
import { default as AdminCreateProblem } from "../pages/admin-dashboard/CreateProblem";
import Layout from "../layouts/Layout";
import ProblemList from "../pages/ProblemList";
import JudgeList from "../pages/JudgeList";
import Judge from "../pages/Judge";
import Login from "../pages/Login";

const PageRouter: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Navigate replace to="/problem" />} />
            <Route path="login" element={<Login />} />
            <Route path="problem" element={<ProblemList />} />
            <Route path="problem/:slug" element={<Problem />} />
            <Route path="/judge" element={<JudgeList />} />
            <Route path="/judge/:uid" element={<Judge />} />
            <Route
              path="admin"
              element={<Navigate replace to="/admin/problem" />}
            />
            <Route path="admin/problem" element={<AdminProblemList />} />
            <Route
              path="admin/problem/create"
              element={<AdminCreateProblem />}
            />
            <Route path="admin/user" element={<div>user</div>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default PageRouter;
