interface PageMenuProps {
  navigation: Array<{ name: string; href: string; icon: JSX.Element }>;
}

const PageMenu: React.FC<PageMenuProps> = (props) => {
  return (
    <ul className="menu menu-horizontal rounded-box bg-base-200">
      {props.navigation.map((item, index) => (
        <li key={index}>
          <a href={item.href}>
            {item.icon}
            <div className="hidden md:block">{item.name}</div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PageMenu;
