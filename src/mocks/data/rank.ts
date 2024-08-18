import { RankInfo } from "@/models/service/rank";

export const rankInfoList: RankInfo[] = [
  {
    rank: 1,
    user: {
      name: "user1",
      account: "user1",
    },
    acceptCount: 10,
    acceptRate: 1,
  },
  {
    rank: 2,
    user: {
      name: "user2",
      account: "user2",
    },
    acceptCount: 9,
    acceptRate: 0.9,
  },
  {
    rank: 3,
    user: {
      name: "user3",
      account: "user3",
    },
    acceptCount: 8,
    acceptRate: 0.8,
  },
];
