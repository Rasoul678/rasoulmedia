import { useLayoutEffect, useState } from "react";

type Direction = "up" | "down";

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState<Direction>("up");

  useLayoutEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset; //! use 'pageYOffset' which is more reliable in cross browsing
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return scrollDir;
};

export default useScrollDirection;
