export namespace JudgeServiceModel {
  export interface RunJudgeRequest {
    code: string;
    language: string;
  }

  export interface JudgeTimeUsage {
    secs: number;
    nanos: number;
  }

  export interface JudgeVerdict {
    verdict: string;
    time_usage: JudgeTimeUsage;
    memory_usage_bytes: number;
    exit_status: number;
    checker_exit_status: number;
  }
}

export namespace JudgeModel {
  export interface JudgeVerdict {
    id: string;
    verdict: string;
    time_usage: string;
    memory_usage: string;
  }
}
