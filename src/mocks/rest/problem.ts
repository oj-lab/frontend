import { HttpResponse, http } from "msw";
import { ProblemServiceModel } from "../../typings/problem";
import { ProblemMockData } from "../data/problem";

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

The first line contains a string \`s\`.

- The length of string \`s\` is at most 100.
- The string contains only lowercase and uppercase letters.

## Output

Output a string \`Hello! %s\`.

## Example

### Input:

\`\`\`text
world!
\`\`\`

### Output:

\`\`\`text
Hello! world!
\`\`\`

`,
      tags: [{ name: "Primer" }],
    };

    return HttpResponse.json(response);
  },
);

export const getProblemInfoList = http.get("/api/v1/problem", ({ request }) => {
  const url = new URL(request.url);

  const limit = url.searchParams.get("limit");
  const offset = url.searchParams.get("offset");

  let problemInfoList = ProblemMockData.ProblemInfoList.slice(
    Number(offset),
    Number(offset) + Number(limit),
  );

  const response: {
    total: number;
    list: ProblemServiceModel.ProblemInfo[];
  } = {
    total: ProblemMockData.ProblemInfoList.length,
    list: problemInfoList,
  };

  return new Response(JSON.stringify(response), { status: 200 });
});

export const putProblem = http.put("/api/v1/problem", async (info) => {
  let requestBody = (await info.request.json()) as ProblemServiceModel.Problem;

  return HttpResponse.json(requestBody);
});

export const putProblemPackage = http.put(
  "/api/v1/problem/:slug/package",
  async (info) => {
    let requestBody = await info.request.formData();
    let file = requestBody.get("file") as File;
    console.log("file:", file);

    return HttpResponse.json({ success: true });
  },
);

export const checkProblemSlug = http.get(
  "/api/v1/problem/:slug/check",
  async ({ params }) => {
    const { slug } = params;
    return HttpResponse.json({ valid: slug === "hello-world" });
  },
);

export const deleteProblem = http.delete("/api/v1/problem/:slug", async (_) => {
  return HttpResponse.json({ success: true });
});
