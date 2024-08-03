import { useEffect, useRef, useState } from "react";
import { ProblemServiceModel } from "../typings/problem";
import { ProblemService } from "../api/problem";

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

  useEffect(() => {
    ProblemService.getProblemInfoList(limit, offset)
      .then((res) => {
        setProblemList(res.list);
        setTotal(res.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit, offset]);

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

  return { getProblemInfoList, getPageCount, setPagenation };
};
