import { useEffect, useRef, useState } from "react";
import * as ProblemServiceModel from "@/models/service/problem";
import * as ProblemService from "@/apis/problem";

export const useProblem = (slug: string, fallback?: () => void) => {
  const [problem, setProblem] = useState<ProblemServiceModel.Problem | null>(
    null,
  );
  const fallbackRef = useRef(fallback);

  useEffect(() => {
    fallbackRef.current = fallback;
  }, [fallback]);

  useEffect(() => {
    ProblemService.getProblem(slug)
      .then((res) => {
        setProblem(res);
      })
      .catch((err) => {
        console.log(err);
        fallbackRef.current?.();
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
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [titleQuery, setTitleQuery] = useState<string>("");
  const [difficultyQuery, setDifficultyQuery] = useState<string>("");

  useEffect(() => {
    ProblemService.getProblemInfoList(limit, offset)
      .then((res) => {
        setProblemList(res.list);
        setTotal(res.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit, offset, titleQuery, difficultyQuery]);

  function getProblemInfoList() {
    return problemList;
  }

  function getPageCount(limit: number) {
    return Math.ceil(total / limit);
  }

  function setPagenation(limit: number, offset: number) {
    setLimit(limit);
    setOffset(offset);
  }

  function setSearch(titleQuery: string, difficultyQuery: string) {
    setTitleQuery(titleQuery);
    setDifficultyQuery(difficultyQuery);
  }

  return { getProblemInfoList, getPageCount, setPagenation, setSearch };
};
