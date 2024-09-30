import { useEffect, useState } from "react";
import * as RankServiceModel from "@/models/service/rank";
import * as RankService from "@/apis/rank";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddMessageSagaPattern } from "@/store/sagas/message";

export const useRankList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [rankList, setRankList] = useState<RankServiceModel.RankInfo[]>([]);

  useEffect(() => {
    RankService.getRankList()
      .then((res) => {
        if (res.list) {
          setRankList(res.list);
        }
      })
      .catch((err) => {
        dispatch({
          type: AddMessageSagaPattern,
          payload: {
            id: "rank-fetch-error",
            content: `${t("Failed to fetch rank list")}`,
            duration: 3000,
            level: "error",
            err: err.toString(),
          },
        });
      });
  }, [dispatch, t]);

  function getRankList() {
    return rankList;
  }

  return { getRankList };
};
