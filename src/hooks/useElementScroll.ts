import React, { RefObject } from "react";

export const useElementScroll = (element: RefObject<HTMLElement>) => {
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    function onScroll() {
      if (element.current) {
        const scrollHeight =
          window.scrollY -
          (window.scrollY + element.current.getBoundingClientRect().top) +
          window.innerHeight / 2;

        setHeight(scrollHeight);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [element]);

  return { height };
};
