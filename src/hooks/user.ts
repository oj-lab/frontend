import * as UserServiceModel from "@/models/service/user";
import * as UserService from "@/apis/user";
import { useEffect, useState } from "react";

export const useUserInfoList = () => {
  const [userInfoList, setUserInfoList] = useState<UserServiceModel.UserInfo[]>(
    [],
  );
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    UserService.getUserInfoList(limit, offset).then((res) => {
      setUserInfoList(res.list);
      setTotal(res.total);
    });
  }, [limit, offset]);

  function getUserInfoList() {
    return userInfoList;
  }

  function getPageCount(limit: number) {
    return Math.ceil(total / limit);
  }

  function setPagenation(limit: number, offset: number) {
    setLimit(limit);
    setOffset(offset);
  }

  return { getUserInfoList, getPageCount, setPagenation };
};
