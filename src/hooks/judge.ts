import { useEffect, useState } from "react";
import * as JudgeServiceModel from "@/models/service/judge";
import * as JudgeService from "@/apis/judge";
import { useDispatch } from "react-redux";
import { AddMessageSagaPattern } from "@/store/sagas/message";
import { useTranslation } from "react-i18next";

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
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
        dispatch({
          type: AddMessageSagaPattern,
          payload: {
            id: "judge-fetch-error",
            content: `${t("Failed to fetch judge")}`,
            duration: 3000,
            level: "error",
            err: err.toString(),
          },
        });
      });
  }

  function getSrcLanguage() {
    return src_language;
  }

  return { runJudge, setSrc, setSrcLanguage, getSrcLanguage };
};

export const useJudgeList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
        dispatch({
          type: AddMessageSagaPattern,
          payload: {
            id: "judge-list-fetch-error",
            content: `${t("Failed to fetch judge list")}`,
            duration: 3000,
            level: "error",
            err: err.toString(),
          },
        });
      });
  };

  useEffect(getJudgeListFromServer, [dispatch, limit, offset, t]);

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
