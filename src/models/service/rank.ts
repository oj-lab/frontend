import { UserInfo } from "./user";

export interface RankInfo {
  rank: number;
  user: UserInfo;
  acceptCount: number;
  acceptRate: number;
}
