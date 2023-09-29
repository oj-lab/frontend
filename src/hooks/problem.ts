import { useEffect, useState } from "react";
import { ProblemServiceModel } from "../typings/problem";
import { ProblemService } from "../api/problem";

export const useProblem = (slug: string) => {
  const [problem, setProblem] = useState<ProblemServiceModel.Problem | null>(
    null,
  );

  useEffect(() => {
    ProblemService.getProblem(slug)
      .then((res) => {
        setProblem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  function getProblem() {
    return problem;
  }

  return { getProblem };
};

export const useProblemInfoList = () => {
  const [problemList, setProblemList] = useState<
    ProblemServiceModel.ProblemInfo[]
  >([]);

  useEffect(() => {
    ProblemService.getProblemInfoList()
      .then((res) => {
        setProblemList(res.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getProblemInfoList() {
    return problemList;
  }

  return { getProblemInfoList };
};
