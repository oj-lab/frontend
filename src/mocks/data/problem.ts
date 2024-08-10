import * as ProblemServiceModel from "@/models/service/problem";

export namespace ProblemMockData {
  export const ProblemInfoList: ProblemServiceModel.ProblemInfo[] = [
    {
      slug: "hello-world",
      title: "Hello World",
      tags: [{ name: "Primer" }],
    },
    {
      slug: "a-plus-b-problem",
      title: "A+B Problem",
      tags: [{ name: "Primer" }, { name: "Math" }],
    },
  ];
}
