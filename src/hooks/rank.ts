import { useEffect, useState } from "react";
import * as RankServiceModel from "@/models/service/rank";
import * as RankService from "@/apis/rank";

export const useRankList = () => {
  const [rankList, setRankList] = useState<RankServiceModel.RankInfo[]>([]);

  useEffect(() => {
    RankService.getRankList()
      .then((res) => {
        setRankList(res.list);
      })
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getRankList() {
    return rankList;
  }

  return { getRankList };
};
