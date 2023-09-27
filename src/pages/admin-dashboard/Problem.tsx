import { Button } from "@nextui-org/react";
import ProblemAdminTable from "../../components/admin-dashboard/ProblemAdminTable";
import { useProblemList } from "../../hooks/problem";
import { problemListPipe } from "../../pipes/problem";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Problem: React.FC = () => {
  const navigate = useNavigate();
  const { getProblemList } = useProblemList();

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
      <ProblemAdminTable data={problemListPipe(getProblemList())} />
    </>
  );
};

export default Problem;
