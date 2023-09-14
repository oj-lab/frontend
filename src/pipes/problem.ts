import { ProblemModel, ProblemServiceModel } from "../typings/problem";

export const problemListPipe = (
  problemInfoList: ProblemServiceModel.ProblemInfo[],
) => {
  let id = 1;
  let plist = problemInfoList.map((problemInfo) => {
    let problem = problemPipe(problemInfo);
    problem.id = `${id++}`;
    return problem;
  });

  return plist;
};

const problemPipe = (
  problemInfo: ProblemServiceModel.ProblemInfo,
): ProblemModel.ProblemInfo => {
  let id = "";
  let slug = problemInfo.slug;
  let title = problemInfo.title;
  let tid = 1;
  let tags = problemInfo.tags.map((tag) => ({ id: `${tid++}`, title: tag }));
  return { id, slug, title, tags };
};
