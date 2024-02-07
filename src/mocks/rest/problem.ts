import { HttpResponse, http } from "msw";
import { ProblemServiceModel } from "../../typings/problem";

export const getProblemInfo = http.get(
  "/api/v1/problem/:slug",
  ({ params }) => {
    const { slug } = params;
    console.log("slug:", slug);

    const response: ProblemServiceModel.Problem = {
      slug: slug.toString(),
      title: "Hello! { ... }",
      description: `
Output a string with format: \`Hello! %s\`.

## Input

- The first line contains a string \`s\`.

## Output

- Output a string \`Hello! %s\`.

## Example

### Input:

\`\`\`
world!
\`\`\`

### Output:

\`\`\`
Hello! world!
\`\`\`

`,
      tags: ["Primer"],
    };

    return HttpResponse.json(response);
  },
);

export const getProblemInfoList = http.get("/api/v1/problem", (info) => {
  const response: {
    total: number;
    list: ProblemServiceModel.ProblemInfo[];
  } = {
    total: 2,
    list: [
      {
        slug: "hello-world",
        title: "Hello World",
        tags: ["Pimer"],
      },
      {
        slug: "a-plus-b-problem",
        title: "A+B Problem",
        tags: ["Primer", "Math"],
      },
    ],
  };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});

export const putProblem = http.put("/api/v1/problem", async (info) => {
  let requestBody: ProblemServiceModel.Problem =
    (await info.request.json()) as ProblemServiceModel.Problem;

  return HttpResponse.json(requestBody);
});
