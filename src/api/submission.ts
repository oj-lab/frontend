import { client } from "./client";
import { SubmissionServiceModel } from "../typings/submission";

export namespace SubmissionService {
  export async function getSubmissionList() {
    let res = await client.get<{
      total: number;
      list: SubmissionServiceModel.SubmissionInfo[];
    }>(`/api/v1/submission`);
    if (res.status !== 200) {
      throw Error("failed to get submission list");
    }
    return res.data;
  }
  export async function getSubmission(uid: string) {
    let res = await client.get<{
      data: SubmissionServiceModel.SubmissionInfo
    }>(`/api/v1/submission/${uid}`);
    if (res.status !== 200) {
      throw Error("failed to get submission detail");
    }
    return res.data;
  }
}
