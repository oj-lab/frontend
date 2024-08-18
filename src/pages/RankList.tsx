import RankTable from "@/components/display/RankTable";
import { useRankList } from "@/hooks/rank";

const RankList: React.FC = () => {
  const { getRankList } = useRankList();
  const rankList = getRankList();

  return (
    <div className="flex w-full flex-auto flex-col gap-8 sm:flex-row">
      <div className="flex w-full flex-col gap-2">
        <div className="h-fit w-full rounded border border-base-content/10 bg-base-100">
          <RankTable data={rankList} />
        </div>
      </div>
    </div>
  );
};

export default RankList;
