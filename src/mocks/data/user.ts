import * as UserServiceModel from "@/models/service/user";

export const UserInfoList: UserServiceModel.UserInfo[] = [
  {
    name: "mock-user",
    account: "mock-user",
    roles: ["admin", "user"],
  },
  {
    name: "mock-user-2",
    account: "mock-user-2",
    roles: ["user"],
  },
];
