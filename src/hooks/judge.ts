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
  const [verdicts, setVerdicts] = useState<JudgeServiceModel.JudgeVerdict[]>(
    [],
  );

  function runJudge(postJudge: () => void) {
    JudgeService.postJudge(slug, src, src_language)
      .then((res) => {
        setVerdicts(res);
        postJudge();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getVerdicts() {
    return verdicts;
  }

  function getSrcLanguage() {
    return src_language;
  }

  return { runJudge, getVerdicts, setSrc, setSrcLanguage, getSrcLanguage };
};

export const useJudgeList = () => {
  const [judgeList, setJudgeList] = useState<JudgeServiceModel.JudgeInfo[]>([]);

  useEffect(() => {
    JudgeService.getJudgeList()
      .then((res) => {
        setJudgeList(res.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getJudgeList() {
    return judgeList;
  }

  function refreshJudgeList() {
    JudgeService.getJudgeList()
      .then((res) => {
        setJudgeList(res.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { getJudgeList, refreshJudgeList };
};
