import * as JudgeServiceModel from "@/models/service/judge";

export const Judges: JudgeServiceModel.JudgeInfo[] = [
  {
    UID: "4d0db7a2-f59c-44ec-b141-36a7ff8c12f9",
    user: {
      account: "user-1",
      name: "User 1",
    },
    problem: {
      slug: "hello-world",
      title: "Hello World",
      tags: [{ name: "Primer" }],
      difficulty: "easy",
      passRate: 0.9097,
    },
    language: "cpp",
    code: `#include <bits/stdc++.h>
using namespace std;

int main() {
  cout << "Hello, World!";
  return 0;
}`,
    status: "finished",
    verdict: "Accepted",
    createAt: "2024-09-29T17:55:05.477643+08:00",
  },
  {
    UID: "6d0355d3-cf5c-4615-a6cc-6973c948cacf",
    user: {
      account: "user-2",
      name: "User 2",
    },
    problem: {
      slug: "a-plus-b-problem",
      title: "A + B Problem",
      tags: [{ name: "Primer" }, { name: "Math" }],
      difficulty: "medium",
      passRate: 0.5014,
    },
    language: "python",
    code: `a, b = map(int, input().split())
print(a - b)`,
    status: "finished",
    verdict: "WrongAnswer",
    createAt: "2024-09-29T17:55:05.477643+08:00",
  },
  {
    UID: "e54456cc-313b-4af0-b836-22414d4571ae",
    user: {
      account: "user-3",
      name: "User 3",
      avatarUrl: "https://www.gravatar.com/avatar/",
    },
    problem: {
      slug: "a-plus-b-problem",
      title: "A + B Problem",
      tags: [{ name: "Primer" }, { name: "Math" }],
      difficulty: "medium",
      passRate: 0.5014,
    },
    language: "javascript",
    code: `const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});`,
    status: "finished",
    verdict: "CompileError",
    createAt: "2024-09-29T17:55:05.477643+08:00",
  },
];
