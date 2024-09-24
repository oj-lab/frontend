import * as UserServiceModel from "@/models/service/user";
import { axiosClient } from "@/utils/axiosClient";

export async function getUserInfoList(
  limit?: number,
  offset?: number,
): Promise<{
  total: number;
  list: UserServiceModel.UserInfo[];
}> {
  limit = limit || 10;
  offset = offset || 0;

  let res = await axiosClient.get<{
    total: number;
    list: UserServiceModel.UserInfo[];
  }>(`/api/v1/user`, {
    params: {
      limit,
      offset,
    },
  });
  if (res.status !== 200) {
    throw Error("failed to get problem list");
  }
  return res.data;
}
