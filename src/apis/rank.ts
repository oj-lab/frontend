import { axiosClient } from "@/utils/axiosClient";
import * as RankServiceModel from "@/models/service/rank";
import { ListWithTotal } from "@/models/common";

export async function getRankList(): Promise<
  ListWithTotal<RankServiceModel.RankInfo>
> {
  let res =
    await axiosClient.get<ListWithTotal<RankServiceModel.RankInfo>>(
      `/api/v1/rank`,
    );
  if (res.status !== 200) {
    throw Error("failed to get judge list");
  }

  return res.data;
}
