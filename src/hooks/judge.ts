import { useEffect, useState } from "react";
import { JudgeServiceModel } from "../typings/judge";
import { JudgeService } from "../api/judge";

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

  return { runJudge, getVerdicts, setSrc, setSrcLanguage };
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

  return { getJudgeList };
};
