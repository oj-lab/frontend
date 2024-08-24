import React from "react";
import { useTranslation } from "react-i18next";
import { joinClasses } from "@/utils/common";
import * as RankServiceModel from "@/models/service/rank";
import UserAvatar from "./UserAvatar";
import { formatPercent } from "@/utils/unit";

export interface RankTableProps {
  data: RankServiceModel.RankInfo[];
  className?: string;
}

const RankTable: React.FC<RankTableProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={props.className}>
      <table className="table" aria-label="Problem Table">
        <thead>
          <tr className="border-base-content/10">
            <th key="rank">{t("Rank")}</th>
            <th key="user">{t("User")}</th>
            <th key="submit-count">{t("Submit Count")}</th>
            <th key="accept-count">{t("Accept Count")}</th>
            <th key="accept-rate">{t("Accept Rate")}</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((rank, idx) => (
            <tr
              key={idx}
              className={joinClasses(
                props.data.length > 1 ? "border-base-content/10" : "border-0",
              )}
            >
              <th>{rank.rank}</th>
              <td className="flex items-center gap-3 py-2">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <UserAvatar
                      alt={rank.user?.name}
                      avatarUrl={rank.user?.avatarUrl}
                    />
                  </div>
                </div>
                <span>{rank.user?.name}</span>
              </td>
              <td>{rank.submitCount}</td>
              <td>{rank.acceptCount}</td>
              <td>{formatPercent(rank.acceptRate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankTable;
