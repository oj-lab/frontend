import { ProblemServiceModel } from "./problem";
import { UserServiceModel } from "./user";

export namespace SubmissionServiceModel {
  export interface SubmissionInfo {
    UID: string;
    user: UserServiceModel.UserInfo;
    problem: ProblemServiceModel.ProblemInfo;
    language: string;
    code: string;
    status: string;
    mainResult: string;
  }
}
