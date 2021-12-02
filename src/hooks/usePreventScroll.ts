import { useLayoutEffect } from "react";

const usePreventScroll = (ref: any) => {
  useLayoutEffect(() => {
    const containerNode = ref?.current;
    const preventScroll = (e: WheelEvent | MouseEvent | UIEvent | TouchEvent) =>
      e.preventDefault();
    containerNode.addEventListener("mousewheel", preventScroll); //! Windows
    containerNode.addEventListener("touchstart", preventScroll, false); //! Mobile

    //! Clean up
    return () => {
      containerNode.removeEventListener("mousewheel", preventScroll);
      containerNode.removeEventListener("touchstart", preventScroll, false);
    };
  }, [ref]);
};

export default usePreventScroll;
