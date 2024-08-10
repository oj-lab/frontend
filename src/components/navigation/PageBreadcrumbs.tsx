import { useLocation, useNavigate } from "react-router-dom";

const PageBreadcrumbs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let paths = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumbs overflow-visible text-sm">
      <ul>
        {paths.map((path, index) => {
          const url = `/${paths.slice(0, index + 1).join("/")}`;
          return (
            <li key={path}>
              {index === paths.length - 1 ? (
                <span className="font-bold">{path}</span>
              ) : (
                <span
                  onClick={() => {
                    navigate(url);
                  }}
                  className="cursor-pointer hover:underline"
                >
                  {path}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageBreadcrumbs;
