import { useNavigate } from "react-router-dom";

interface PageMenuProps {
  navigation: Array<{ name: string; href: string; icon: JSX.Element }>;
}

const PageMenu: React.FC<PageMenuProps> = (props) => {
  const navigate = useNavigate();

  return (
    <ul className="menu menu-horizontal rounded-box bg-base-200">
      {props.navigation.map((item, index) => (
        <li key={index}>
          <div onClick={() => navigate(item.href)}>
            {item.icon}
            <div className="hidden md:block">{item.name}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PageMenu;
