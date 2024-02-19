import { http } from "msw";
import { SubmissionServiceModel } from "../../typings/submission";

const submissions:SubmissionServiceModel.SubmissionInfo[] = [
  {
    uid: "1",
    user: {
      account: "user-1",
      name: "User 1",
    },
    problem: {
      slug: "hello-world",
      title: "Hello World",
      tags: ["Primer"],
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
      tags: ["Primer"],
    },
    language: "C++",
    status: "wrong answer",
  },
];

export const getSubmissionInfoList = http.get("/api/v1/submission", (info) => {
  const response: {
    total: number;
    list: SubmissionServiceModel.SubmissionInfo[];
  } = {
    total: 2,
    list: submissions,
  };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});

export const getSubmissionInfo = http.get("/api/v1/submission/:uid", ( { params }) => {
  const { uid } = params;
  const response: SubmissionServiceModel.SubmissionInfo = submissions[+uid-1];
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});
