import * as ProblemServiceModel from "@/models/service/problem";

export namespace ProblemMockData {
  export const ProblemInfoList: ProblemServiceModel.ProblemInfo[] = [
    {
      slug: "hello-world",
      title: "Hello World",
      tags: [{ name: "Primer" }],
      difficulty: "easy",
      passRate: 90.97,
    },
    {
      slug: "a-plus-b-problem",
      title: "A+B Problem",
      tags: [{ name: "Primer" }, { name: "Math" }],
      difficulty: "medium",
      passRate: 50.14,
    },
  ];
}
