import { Button, Switch } from "@nextui-org/react";
import ProblemTable from "../../components/ProblemTable";
import { useProblemInfoList } from "../../hooks/problem";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";

const Problem: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showActions, setShowActions] = React.useState<boolean>(true);

  const { getProblemInfoList } = useProblemInfoList();

  return (
    <>
      <Button
        className="absolute bottom-6 right-6"
        isIconOnly={true}
        color="primary"
        radius="full"
        size="lg"
        onClick={() => {
          navigate("/admin/new/problem");
        }}
      >
        <PlusIcon className="h-6 w-6" />
      </Button>

      <div className="flex flex-col gap-4">
        <Switch
          isSelected={showActions}
          onClick={() => {
            setShowActions(!showActions);
          }}
        >
          {t("Show actions")}
        </Switch>
        <ProblemTable data={getProblemInfoList()} showActions={showActions} />
      </div>
    </>
  );
};

export default Problem;
