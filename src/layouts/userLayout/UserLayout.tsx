import Navbar from "./Navbar";

export interface UserLayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  return (
    <div className="relative flex flex-1 flex-col">
      <Navbar />
      {props.title && (
        <header className="h-auto shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight">{props.title}</h1>
          </div>
        </header>
      )}
      <main className="w-full max-w-7xl flex-auto flex-col self-center py-6 sm:px-6 lg:px-8">
        {props.children}
      </main>
    </div>
  );
};

export default UserLayout;
