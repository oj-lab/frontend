export namespace ProblemServiceModel {
  export interface Problem {
    slug: string;
    title: string;
    description: string;
    tags: { name: string }[];
  }

  export interface ProblemInfo {
    slug: string;
    title: string;
    tags: { name: string }[];
  }
}
