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

  export async function putProblem(problem: ProblemServiceModel.Problem) {
    let res = await client.put<ProblemServiceModel.Problem>(
      `/api/v1/problem`,
      problem,
    );

    if (res.status !== 200) {
      throw Error("failed to put problem");
    }
    return res.data;
  }

  export async function getProblemInfoList(limit?: number, offset?: number) {
    limit = limit || 10;
    offset = offset || 0;

    let res = await client.get<{
      total: number;
      list: ProblemServiceModel.ProblemInfo[];
    }>(`/api/v1/problem`, {
      params: {
        limit,
        offset,
      },
    });
    if (res.status !== 200) {
      throw Error("failed to get problem list");
    }
    return res.data;
  }

  export async function putProblemPackage(
    problemSlug: string,
    packageFile: File,
  ) {
    let formData = new FormData();
    formData.append("file", packageFile);
    let res = await client.put<ProblemServiceModel.Problem>(
      `/api/v1/problem/${problemSlug}/package`,
      formData,
    );
    if (res.status !== 200) {
      throw Error("failed to put problem package");
    }
    return res.data;
  }

  export async function checkProblemSlug(
    slug: string,
  ): Promise<{ valid: boolean }> {
    let res = await client.get<{ valid: boolean }>(
      `/api/v1/problem/${slug}/check`,
    );

    return res.data;
  }

  export async function deleteProblem(slug: string) {
    let res = await client.delete(`/api/v1/problem/${slug}`);
    if (res.status !== 200) {
      throw Error("failed to delete problem");
    }
  }
}
