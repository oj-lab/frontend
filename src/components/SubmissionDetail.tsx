import React from "react";
import { SubmissionServiceModel } from "../typings/submission";

export interface SubmissionDetailProps {
  data?: SubmissionServiceModel.SubmissionInfo;
  className?: string;
}

const SubmissionDetail: React.FC<SubmissionDetailProps> = (props) => {
  return (
    <div className={props.className}>{props.data ? props.data.uid : ""}</div>
  );
};

export default SubmissionDetail;
