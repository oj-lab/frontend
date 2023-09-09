import { rest } from "msw";
import { ProblemServiceModel } from "../../typings/problem";

export const getProblemInfo = rest.get("/v1/problem/:slug", (req, res, ctx) => {
  const slug = req.params.slug;

  const response: ProblemServiceModel.ProblemInfo = {
    slug: slug.toString(),
    title: "Hello! { ... }",
    description: `
Output a string with format: \`Hello! %s\`.

**Input**

- The first line contains a string \`s\`.

**Output**

- Output a string \`Hello! %s\`.

**Example**

Input:

\`\`\`
world!
\`\`\`

Output:

\`\`\`
Hello! world!
\`\`\`

`,
    tags: ["tag1", "tag2"],
  };

  return res(ctx.status(200), ctx.json(response));
});
