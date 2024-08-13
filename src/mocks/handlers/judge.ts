import { http } from "msw";
import * as JudgeServiceModel from "@/models/service/judge";
import * as JudgeMockData from "../data/judge";

export const postJudge = http.post("/api/v1/problem/:slug/judge", (info) => {
  const response: JudgeServiceModel.JudgeVerdict[] = [
    {
      verdict: "Accepted",
      time_usage: {
        secs: 0,
        nanos: 1709000,
      },
      memory_usage_bytes: 19992,
      exit_status: 0,
      checker_exit_status: 0,
    },
    {
      verdict: "WrongAnswer",
      time_usage: {
        secs: 0,
        nanos: 1743000,
      },
      memory_usage_bytes: 19992,
      exit_status: 0,
      checker_exit_status: 0,
    },
  ];

  return new Response(JSON.stringify(response), {
    status: 200,
  });
});

export const getJudgeInfoList = http.get("/api/v1/judge", (info) => {
  let random = Math.floor(Math.random() * 3) + 1;

  const response: {
    total: number;
    list: JudgeServiceModel.JudgeInfo[];
  } = {
    total: random,
    list: JudgeMockData.Judges,
  };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});

export const getJudgeInfo = http.get("/api/v1/judge/:uid", ({ params }) => {
  const { uid } = params;

  let judgesMap = new Map<string, JudgeServiceModel.JudgeInfo>();
  JudgeMockData.Judges.forEach((judge) => {
    judgesMap.set(judge.UID, judge);
  });

  const response: JudgeServiceModel.JudgeInfo = judgesMap.get(uid.toString())!;
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});
