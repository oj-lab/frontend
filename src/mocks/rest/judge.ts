import { http } from "msw";
import { JudgeServiceModel } from "../../typings/judge";

export const postJudge = http.post(
  "/api/v1/problem/:slug/submission",
  (info) => {
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
  },
);
