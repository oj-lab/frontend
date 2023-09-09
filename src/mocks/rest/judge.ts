import { rest } from "msw";
import { JudgeServiceModel } from "../../typings/judge";

export const postJudge = rest.post(
  "/v1/problem/:slug/judge",
  (_req, res, ctx) => {
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

    return res(ctx.status(200), ctx.json(response));
  },
);
