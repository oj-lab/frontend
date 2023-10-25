import { ProblemServiceModel } from "../typings/problem";
import { client } from "./client";

export namespace ProblemService {
  export async function getProblem(slug: string) {
    let res = await client.get<ProblemServiceModel.Problem>(
      `/api/v1/problem/${slug}`,
    );
    if (res.status !== 200) {
      throw Error("failed to get problem info");
    }
    return res.data;
  }

  export async function getProblemInfoList() {
    let res = await client.get<{
      total: number;
      list: ProblemServiceModel.ProblemInfo[];
    }>(`/api/v1/problem`);
    if (res.status !== 200) {
      throw Error("failed to get problem list");
    }
    return res.data;
  }
}
