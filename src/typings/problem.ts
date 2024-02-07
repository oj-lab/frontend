export namespace ProblemServiceModel {
  export interface Problem {
    slug: string;
    title: string;
    description: string;
    tags: string[];
  }

  export interface ProblemInfo {
    slug: string;
    title: string;
    tags: string[];
  }
}
