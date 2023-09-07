import { useEffect, useState } from "react";
import { ProblemServiceModel } from "../typings/problem";
import { ProblemService } from "../api/problem";

export const useProblem = (slug: string) => {
  const [problemInfo, setProblemInfo] =
    useState<ProblemServiceModel.ProblemInfo | null>(null);

  useEffect(() => {
    ProblemService.getProblemInfo(slug)
      .then((res) => {
        setProblemInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  const getProblemInfo = () => {
    return problemInfo;
  };

  return { getProblemInfo };
};
