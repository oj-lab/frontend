import { RankInfo } from "@/models/service/rank";

export const rankInfoList: RankInfo[] = [
  {
    rank: 1,
    user: {
      name: "Champion",
      account: "user1",
    },
    submitCount: 10,
    acceptCount: 10,
    acceptRate: 1,
  },
  {
    rank: 2,
    user: {
      name: "Runner-up",
      account: "user2",
    },
    submitCount: 10,
    acceptCount: 9,
    acceptRate: 0.9,
  },
  {
    rank: 3,
    user: {
      name: "Second Runner-up",
      account: "user3",
    },
    submitCount: 10,
    acceptCount: 8,
    acceptRate: 0.8,
  },
  {
    rank: 4,
    user: {
      name: "User 4",
      account: "user4",
    },
    submitCount: 10,
    acceptCount: 7,
    acceptRate: 0.7,
  },
];
