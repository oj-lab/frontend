import { UserInfo } from "./user";

export interface RankInfo {
  rank: number;
  user: UserInfo;
  submitCount: number;
  acceptCount: number;
  acceptRate: number;
}
