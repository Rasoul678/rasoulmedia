import { ReactNode } from "react";
import RenderMenu from "./RenderMenu";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <RenderMenu />
      <div className="main">
        <div className="gradient" />
      </div>
      <main>{children}</main>
    </section>
  );
};

export default MainLayout;
