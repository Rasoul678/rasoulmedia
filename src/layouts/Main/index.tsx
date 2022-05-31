import { ReactNode } from "react";
import RenderMenu from "./RenderMenu";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <RenderMenu />
      {children}
    </section>
  );
};

export default MainLayout;
