import RankTable from "@/components/display/RankTable";
import { useRankList } from "@/hooks/rank";
import { useTranslation } from "react-i18next";

const RankList: React.FC = () => {
  const { t } = useTranslation();
  const { getRankList } = useRankList();
  const rankList = getRankList();

  return (
    <div className="flex w-full flex-auto flex-col gap-2">
      <div>
        <p className="text-xs">
          {t(
            "Once you passed the problem, the submission after will not be counted.",
          )}
        </p>
      </div>
      <div className="h-fit w-full overflow-auto rounded border border-base-content/10 bg-base-100">
        <div className="flex w-full flex-col gap-2">
          <RankTable data={rankList} />
        </div>
      </div>
    </div>
  );
};

export default RankList;
