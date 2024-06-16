import { http } from "msw";
import { JudgeServiceModel } from "../../typings/judge";

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

const judges: JudgeServiceModel.JudgeInfo[] = [
  {
    UID: "1",
    user: {
      account: "user-1",
      name: "User 1",
    },
    problem: {
      slug: "hello-world",
      title: "Hello World",
      tags: [{ name: "Primer" }],
    },
    language: "Cpp",
    code: "#include<bits/stdc++.h>\nusing namespace std;\nint main()\n{}\n",
    status: "finished",
    verdict: "Accepted",
  },
  {
    UID: "2",
    user: {
      account: "user-2",
      name: "User 2",
    },
    problem: {
      slug: "a-plus-b-problem",
      title: "A + B Problem",
      tags: [{ name: "Primer" }, { name: "Math" }],
    },
    language: "Cpp",
    code: "#include<bits/stdc++.h>\nusing namespace std;\nint main()\n{}\n",
    status: "finished",
    verdict: "WrongAnswer",
  },
  {
    UID: "3",
    user: {
      account: "user-2",
      name: "User 2",
    },
    problem: {
      slug: "a-plus-b-problem",
      title: "A + B Problem",
      tags: [{ name: "Primer" }, { name: "Math" }],
    },
    language: "Cpp",
    code: "#include<bits/stdc++.h>\nusing namespace std;\nint main()\n{}\n",
    status: "finished",
    verdict: "CompileError",
  },
];

export const getJudgeInfoList = http.get("/api/v1/judge", (info) => {
  let random = Math.floor(Math.random() * 3) + 1;

  const response: {
    total: number;
    list: JudgeServiceModel.JudgeInfo[];
  } = {
    total: random,
    list: judges.slice(0, random),
  };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});

export const getJudgeInfo = http.get("/api/v1/judge/:uid", ({ params }) => {
  const { uid } = params;
  const response: JudgeServiceModel.JudgeInfo = judges[+uid - 1];
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});
