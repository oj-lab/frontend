import { rest } from "msw";
import { ProblemServiceModel } from "../../typings/problem";

export const getProblemInfo = rest.get("/v1/problem/:slug", (req, res, ctx) => {
  const slug = req.params.slug;

  const response: ProblemServiceModel.ProblemInfo = {
    slug: slug.toString(),
    title: "Problem Title",
    description: `
Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$
    `,
    tags: ["tag1", "tag2"],
  };

  return res(ctx.status(200), ctx.json(response));
});
