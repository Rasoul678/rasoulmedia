import RenderMenu from "./RenderMenu";

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <RenderMenu />
      {children}
    </section>
  );
};

export default MainLayout;
