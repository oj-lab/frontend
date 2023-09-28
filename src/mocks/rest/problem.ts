import { rest } from "msw";
import { ProblemServiceModel } from "../../typings/problem";

export const getProblemInfo = rest.get("/v1/problem/:slug", (req, res, ctx) => {
  const slug = req.params.slug;

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

  return res(ctx.status(200), ctx.json(response));
});

export const getProblemInfoList = rest.get("/v1/problem", (req, res, ctx) => {
  const response: ProblemServiceModel.ProblemInfo[] = [
    {
      slug: "hello-world",
      title: "Hello World",
      tags: [{ slug: "primer", name: "Primer" }],
    },
    {
      slug: "a+b-problem",
      title: "A+B Problem",
      tags: [
        { slug: "primer", name: "Primer" },
        { slug: "math", name: "Math" },
      ],
    },
  ];
  return res(ctx.status(200), ctx.json(response));
});
