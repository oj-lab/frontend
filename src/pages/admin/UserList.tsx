import React, { useEffect } from "react";
import Pagination from "@/components/control/Pagination";
import { useUserInfoList } from "@/hooks/user";
import UserTable from "@/components/display/UserTable";

const countPerPageSelections = [10, 25, 50];

const UserList: React.FC = () => {
  const { getUserInfoList, getPageCount, setPagenation } = useUserInfoList();
  const [countPerPage, setCountPerPage] = React.useState(
    countPerPageSelections[0],
  );
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    setPagenation(countPerPage, page * countPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countPerPage, page]);

  return (
    <div className="card card-bordered flex w-full flex-col rounded border-base-content/10 bg-base-100">
      <UserTable
        data={getUserInfoList()}
        showActions={true}
        className={
          getUserInfoList().length === 1
            ? ""
            : "border-b border-base-content/10"
        }
      />
      <Pagination
        page={page}
        pageCount={getPageCount(countPerPage)}
        setCountPerPage={setCountPerPage}
        countPerPage={countPerPage}
        countPerPageSelections={countPerPageSelections}
        setPage={setPage}
      />
    </div>
  );
};

export default UserList;
