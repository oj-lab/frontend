export namespace ProblemServiceModel {
  export interface ProblemInfo {
    slug: string;
    title: string;
    description: string;
    tags: string[];
  }
}

export namespace ProblemModel {
  interface Tag {
    id: string;
    title: string;
  }
  export interface ProblemInfo {
    id: string;
    slug: string;
    title: string;
    tags: Tag[];
  }
}
