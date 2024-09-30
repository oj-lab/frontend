import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/layouts/Layout";

const Problem = lazy(() => import("@/pages/problem/Problem"));
const AdminProblemList = lazy(() => import("@/pages/admin/ProblemList"));
const AdminCreateProblem = lazy(() => import("@/pages/admin/CreateProblem"));
const AdminUserList = lazy(() => import("@/pages/admin/UserList"));
const ProblemList = lazy(() => import("@/pages/problem/ProblemList"));
const JudgeList = lazy(() => import("@/pages//judge/JudgeList"));
const Judge = lazy(() => import("@/pages/judge/Judge"));
const RankList = lazy(() => import("@/pages/RankList"));
const Login = lazy(() => import("@/pages/Login"));

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* TODO: Perf loading view */}
      <Suspense fallback={<Layout>loading...</Layout>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Navigate replace to="/problems" />} />
            <Route path="problems">
              <Route path="" element={<ProblemList />} />
              <Route path=":slug" element={<Problem />} />
            </Route>
            <Route path="rank" element={<RankList />} />
            <Route path="judges">
              <Route path="" element={<JudgeList />} />
              <Route path=":uid" element={<Judge />} />
            </Route>
            <Route path="login" element={<Login />} />
            {/* Admin */}
            <Route path="admin">
              <Route
                path=""
                element={<Navigate replace to="/admin/problems" />}
              />
              <Route path="problems" element={<AdminProblemList />} />
              <Route path="problems/create" element={<AdminCreateProblem />} />
              <Route path="users" element={<AdminUserList />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
