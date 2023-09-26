import ProblemAdminTable from "../../components/admin-dashboard/ProblemAdminTable";
import { useProblemList } from "../../hooks/problem";
import { problemListPipe } from "../../pipes/problem";

const AdminProblem: React.FC = () => {
  const { getProblemList } = useProblemList();
  return <ProblemAdminTable data={problemListPipe(getProblemList())} />;
};

export default AdminProblem;
