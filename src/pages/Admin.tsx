import ProblemAdminTable from "../components/ProblemAdminTable";
import { useProblemList } from "../hooks/problem";
import Sidebar from "../layouts/adminLayout/Sidebar";
import { problemListPipe } from "../pipes/problem";

const Admin: React.FC = () => {
  const { getProblemList } = useProblemList();
  return (
    <Sidebar>
      <ProblemAdminTable data={problemListPipe(getProblemList())} />
    </Sidebar>
  );
};

export default Admin;
