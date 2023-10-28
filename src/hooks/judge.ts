import { useState } from "react";
import { JudgeServiceModel } from "../typings/judge";
import { JudgeService } from "../api/judge";

export const useJudge = (slug: string) => {
  const [src, setSrc] = useState<string>("");
  const [src_language, setSrcLanguage] = useState<string>("");

  const [verdicts, setVerdicts] = useState<JudgeServiceModel.JudgeVerdict[]>(
    [],
  );

  function runJudge() {
    JudgeService.postSubmission(slug, src, src_language)
      .then((res) => {
        setVerdicts(res);
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
