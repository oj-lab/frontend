export namespace ProblemServiceModel {
  export interface AlgorithmTag {
    slug: string;
    name: string;
  }

  export interface Problem {
    slug: string;
    title: string;
    description: string;
    tags: AlgorithmTag[];
  }

  export interface ProblemInfo {
    slug: string;
    title: string;
    tags: AlgorithmTag[];
  }

  export interface GetProblemInfoResponse {
    list: ProblemInfo[];
  }
}
