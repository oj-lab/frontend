import { JudgeServiceModel } from "../typings/judge";
import { client } from "./client";

export namespace JudgeService {
  export async function postJudge(
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
      `/api/v1/problem/${slug}/judge`,
      data,
    );

    if (res.status !== 200) {
      throw Error("failed to run judge");
    }
    return res.data;
  }

  export async function getJudgeList() {
    let res = await client.get<{
      total: number;
      list: JudgeServiceModel.JudgeInfo[];
    }>(`/api/v1/judge`);
    if (res.status !== 200) {
      throw Error("failed to get judge list");
    }
    return res.data;
  }
  export async function getJudge(uid: string) {
    let res = await client.get<JudgeServiceModel.JudgeInfo>(
      `/api/v1/judge/${uid}`,
    );
    if (res.status !== 200) {
      throw Error("failed to get judge detail");
    }
    return res.data;
  }
}
