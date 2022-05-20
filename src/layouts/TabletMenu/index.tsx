import { useRef, lazy, Suspense } from "react";
import { useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import MenuToggle from "./MenToggle";
import * as Styled from "./TabletMenu.styles";
import AppLoader from "components/AppLoader";

const Navigation = lazy(
  () => import(/*webpackChunkName: "Tablet_Navigation"*/ "./Navigation")
);

const { direction } = window;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: `circle(20px at ${direction === "ltr" ? "30px" : "270px"} 40px)`,
    transition: {
      type: "spring",
      delay: 0.2,
      stiffness: 400,
      damping: 40,
    },
  },
};

interface TabletMenuProps {}

const TabletMenu: React.FC<TabletMenuProps> = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Styled.TabletNavbar
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      isOpen={isOpen}
    >
      <Styled.TabletNavbarBg variants={sidebar} />
      <Suspense fallback={<AppLoader />}>{isOpen && <Navigation />}</Suspense>
      <MenuToggle toggle={() => toggleOpen()} />
    </Styled.TabletNavbar>
  );
};

export default TabletMenu;
