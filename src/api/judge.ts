import { JudgeServiceModel } from "../typings/judge";
import { client } from "./client";

export namespace JudgeService {
  export async function postJudge(
    slug: string,
    src: string,
    src_language: string,
  ) {
    let body: JudgeServiceModel.RunJudgeRequest = {
      src,
      src_language,
    };
    let data = JSON.stringify(body);

    let res = await client.post<JudgeServiceModel.JudgeVerdict[]>(
      `/api/v1/problem/${slug}/judge`,
      data,
    );

    if (res.status !== 200) {
      throw Error("failed to run judge");
    }
    return res.data;
  }
}
