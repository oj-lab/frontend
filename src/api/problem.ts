import { ProblemServiceModel } from "../typings/problem";
import { client } from "./client";

export namespace ProblemService {
  export async function getProblem(slug: string) {
    let res = await client.get<ProblemServiceModel.Problem>(
      `/v1/problem/${slug}`,
    );
    if (res.status !== 200) {
      throw Error("failed to get problem info");
    }
    return res.data;
  }

  export async function getProblemInfoList() {
    let res =
      await client.get<ProblemServiceModel.GetProblemInfoResponse>(
        `/v1/problem`,
      );
    if (res.status !== 200) {
      throw Error("failed to get problem list");
    }
    return res.data;
  }
}
