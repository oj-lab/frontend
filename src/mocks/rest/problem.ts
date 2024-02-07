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
      tags: [{ slug: "primer", name: "Primer" }],
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
        tags: [{ slug: "primer", name: "Primer" }],
      },
      {
        slug: "a-plus-b-problem",
        title: "A+B Problem",
        tags: [
          { slug: "primer", name: "Primer" },
          { slug: "math", name: "Math" },
        ],
      },
    ],
  };
  return new Response(JSON.stringify(response), {
    status: 200,
  });
});
