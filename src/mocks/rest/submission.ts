import { http } from "msw";
import { SubmissionServiceModel } from "../../typings/submission";

export const getSubmissionInfoList = http.get("/api/v1/submission", (info) => {
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
        status: "wrong answer",
      },
    ],
  };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});
