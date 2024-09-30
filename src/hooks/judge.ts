import { useEffect, useState } from "react";
import * as JudgeServiceModel from "@/models/service/judge";
import * as JudgeService from "@/apis/judge";

export const useJudge = (uid: string) => {
  const [judge, setJudge] = useState<JudgeServiceModel.JudgeInfo>();
  useEffect(() => {
    JudgeService.getJudge(uid)
      .then((res) => {
        setJudge(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uid]);

  function getJudge() {
    return judge;
  }

  return { getJudge };
};

export const useRunJudge = (slug: string) => {
  const [src, setSrc] = useState<string>("");
  const [src_language, setSrcLanguage] = useState<string>("");

  function runJudge(
    afterJudgePosted: (judgeInfo: JudgeServiceModel.JudgeInfo) => void,
  ) {
    JudgeService.postJudge(slug, src, src_language)
      .then((res) => {
        afterJudgePosted(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSrcLanguage() {
    return src_language;
  }

  return { runJudge, setSrc, setSrcLanguage, getSrcLanguage };
};

export const useJudgeList = () => {
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [judgeList, setJudgeList] = useState<JudgeServiceModel.JudgeInfo[]>([]);

  const getJudgeListFromServer = () => {
    JudgeService.getJudgeList()
      .then((res) => {
        setJudgeList(res.list);
        setTotal(res.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getJudgeListFromServer, [limit, offset]);

  function getJudgeList() {
    return judgeList;
  }

  function refreshJudgeList() {
    getJudgeListFromServer();
  }

  function getPageCount(limit: number) {
    return Math.ceil(total / limit);
  }

  function setPagenation(limit: number, offset: number) {
    setLimit(limit);
    setOffset(offset);
  }

  return { getJudgeList, refreshJudgeList, getPageCount, setPagenation };
};
