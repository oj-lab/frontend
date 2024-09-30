import * as UserServiceModel from "@/models/service/user";
import * as UserService from "@/apis/user";
import { useEffect, useState } from "react";
import { AddMessageSagaPattern } from "@/store/sagas/message";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export const useUserInfoList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [userInfoList, setUserInfoList] = useState<UserServiceModel.UserInfo[]>(
    [],
  );
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    UserService.getUserInfoList(limit, offset)
      .then((res) => {
        setUserInfoList(res.list);
        setTotal(res.total);
      })
      .catch((err) => {
        dispatch({
          type: AddMessageSagaPattern,
          payload: {
            id: "user-list-fetch-error",
            content: `${t("Failed to fetch user list")}`,
            duration: 3000,
            level: "error",
            err: err.toString(),
          },
        });
      });
  }, [dispatch, limit, offset, t]);

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
