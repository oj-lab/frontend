import { ProblemServiceModel } from "./problem";

export namespace SubmissionServiceModel {
  export interface SubmissionInfo {
    uid: string;
    problem: ProblemServiceModel.ProblemInfo;
    language: string;
    status: string;
  }
}
