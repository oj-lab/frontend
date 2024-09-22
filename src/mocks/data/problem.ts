import * as ProblemServiceModel from "@/models/service/problem";

export const ProblemInfoList: ProblemServiceModel.ProblemInfo[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    tags: [{ name: "Primer" }],
    difficulty: "easy",
    passRate: 0.9097,
  },
  {
    slug: "a-plus-b-problem",
    title: "A+B Problem",
    tags: [{ name: "Primer" }, { name: "Math" }],
    difficulty: "medium",
    passRate: 0.5014,
    solved: true,
  },
];

export const Problem: ProblemServiceModel.Problem = {
  slug: "hello-world",
  title: "Hello! { ... }",
  tags: [{ name: "Primer" }],
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
};
