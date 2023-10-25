import { useEffect, useState } from "react";
import { SubmissionServiceModel } from "../typings/submission";
import { SubmissionService } from "../api/submission";

export const useSubmissionList = () => {
  const [submissionList, setSubmissionList] = useState<
    SubmissionServiceModel.SubmissionInfo[]
  >([]);

  useEffect(() => {
    SubmissionService.getSubmissionList()
      .then((res) => {
        setSubmissionList(res.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getSubmissionList() {
    return submissionList;
  }

  return { getSubmissionList };
};
