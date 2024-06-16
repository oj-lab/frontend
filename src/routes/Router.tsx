import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";

const Problem = lazy(() => import("../pages/Problem"));
const AdminProblemList = lazy(
  () => import("../pages/admin-dashboard/ProblemList"),
);
const AdminCreateProblem = lazy(
  () => import("../pages/admin-dashboard/CreateProblem"),
);
const ProblemList = lazy(() => import("../pages/ProblemList"));
const JudgeList = lazy(() => import("../pages/JudgeList"));
const Judge = lazy(() => import("../pages/Judge"));
const Login = lazy(() => import("../pages/Login"));

const PageRouter: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* TODO: Perf loading view */}
      <Suspense fallback={<Layout>loading...</Layout>}>
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
