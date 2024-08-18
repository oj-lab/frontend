import { http } from "msw";
import * as RankMockData from "../data/rank";
import * as RankerviceModel from "@/models/service/rank";

export const getRankList = http.get("/api/v1/rank", () => {
  let rankInfoList = RankMockData.rankInfoList;

  const response: {
    total: number;
    list: RankerviceModel.RankInfo[];
  } = {
    total: RankMockData.rankInfoList.length,
    list: rankInfoList,
  };

  return new Response(JSON.stringify(response), { status: 200 });
});
