import { rest } from "msw";
import { SubmissionServiceModel } from "../../typings/submission";

export const getSubmissionInfoList = rest.get(
  "/api/v1/submission",
  (req, res, ctx) => {
    const response: {
      total: number;
      list: SubmissionServiceModel.SubmissionInfo[];
    } = {
      total: 2,
      list: [
        {
          uid: "1",
          user: {
            account: "user-1",
            name: "User 1",
          },
          problem: {
            slug: "hello-world",
            title: "Hello World",
            tags: [{ slug: "primer", name: "Primer" }],
          },
          language: "C++",
          status: "finished",
        },
        {
          uid: "2",
          user: {
            account: "user-2",
            name: "User 2",
          },
          problem: {
            slug: "a-plus-b-problem",
            title: "A + B Problem",
            tags: [{ slug: "primer", name: "Primer" }],
          },
          language: "C++",
          status: "finished",
        },
      ],
    };
    return res(ctx.status(200), ctx.json(response));
  },
);
