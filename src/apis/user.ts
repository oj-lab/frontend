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

export async function deleteUser(account: string) {
  let res = await axiosClient.delete(`/api/v1/user/${account}`);
  if (res.status !== 200) {
    throw Error("failed to delete user");
  }
}

export async function grantUserRole(
  account: string,
  role: string,
  domain?: string,
) {
  if (!domain) domain = "system";

  let body = {
    role,
    domain,
  };
  let data = JSON.stringify(body);

  let res = await axiosClient.post(`/api/v1/user/${account}/role`, data);
  if (res.status !== 200) {
    throw Error("failed to grant user role");
  }
}

export async function revokeUserRole(
  account: string,
  role: string,
  domain?: string,
) {
  if (!domain) domain = "system";

  let body = {
    role,
    domain,
  };
  let data = JSON.stringify(body);

  let res = await axiosClient.delete(`/api/v1/user/${account}/role`, {
    data,
  });
  if (res.status !== 200) {
    throw Error("failed to revoke user role");
  }
}
