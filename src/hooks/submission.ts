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

export const useSubmission = (uid: string) => {
  const [submission, setSubmission] =
    useState<SubmissionServiceModel.SubmissionInfo>();
  useEffect(() => {
    SubmissionService.getSubmission(uid)
      .then((res) => {
        setSubmission(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uid]);

  function getSubmission() {
    return submission;
  }

  return { getSubmission };
};
