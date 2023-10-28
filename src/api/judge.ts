import { JudgeServiceModel } from "../typings/judge";
import { client } from "./client";

export namespace JudgeService {
  export async function postSubmission(
    slug: string,
    code: string,
    language: string,
  ) {
    let body: JudgeServiceModel.RunJudgeRequest = {
      code,
      language,
    };
    let data = JSON.stringify(body);

    let res = await client.post<JudgeServiceModel.JudgeVerdict[]>(
      `/api/v1/problem/${slug}/submission`,
      data,
    );

    if (res.status !== 200) {
      throw Error("failed to run judge");
    }
    return res.data;
  }
}
