import { ProblemServiceModel } from "../typings/problem";
import { client } from "./client";

export namespace ProblemService {
  export async function getProblemInfo(slug: string) {
    let res = await client.get<ProblemServiceModel.ProblemInfo>(
      `/v1/problem/${slug}`,
    );
    if (res.status !== 200) {
      throw Error("failed to get problem info");
    }
    return res.data;
  }
}
