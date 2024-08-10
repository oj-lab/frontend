import * as ProblemServiceModel from "@/models/service/problem";
import { axiosClient } from "@/utils/axiosClient";

export async function getProblem(
  slug: string,
): Promise<ProblemServiceModel.Problem> {
  let res = await axiosClient.get<ProblemServiceModel.Problem>(
    `/api/v1/problem/${slug}`,
  );
  if (res.status !== 200) {
    throw Error("failed to get problem info");
  }
  return res.data;
}

export async function putProblem(
  problem: ProblemServiceModel.Problem,
): Promise<ProblemServiceModel.Problem> {
  let res = await axiosClient.put<ProblemServiceModel.Problem>(
    `/api/v1/problem`,
    problem,
  );

  if (res.status !== 200) {
    throw Error("failed to put problem");
  }
  return res.data;
}

export async function getProblemInfoList(
  limit?: number,
  offset?: number,
): Promise<{
  total: number;
  list: ProblemServiceModel.ProblemInfo[];
}> {
  limit = limit || 10;
  offset = offset || 0;

  let res = await axiosClient.get<{
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
): Promise<ProblemServiceModel.Problem> {
  let formData = new FormData();
  formData.append("file", packageFile);
  let res = await axiosClient.put<ProblemServiceModel.Problem>(
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
  let res = await axiosClient.get<{ valid: boolean }>(
    `/api/v1/problem/${slug}/check`,
  );

  return res.data;
}

export async function deleteProblem(slug: string) {
  let res = await axiosClient.delete(`/api/v1/problem/${slug}`);
  if (res.status !== 200) {
    throw Error("failed to delete problem");
  }
}
