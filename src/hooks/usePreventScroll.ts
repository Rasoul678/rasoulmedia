import { useLayoutEffect } from "react";

const usePreventScroll = (ref: any, enable: boolean) => {
  useLayoutEffect(() => {
    const containerNode = ref?.current;
    const bodyElement = document.getElementsByTagName("body")[0];
    const preventScroll = (
      e: WheelEvent | MouseEvent | UIEvent | TouchEvent
    ) => {
      //! First method (part 1)
      if (ref.current === e.currentTarget) {
        bodyElement.style.height = "100vh";
        bodyElement.style.overflow = "hidden";
      }
      //! Second method (It prevents scroll for all elements)
      //  e.preventDefault();
    };
    containerNode.addEventListener("mousewheel", preventScroll); //! Windows
    containerNode.addEventListener("touchmove", preventScroll, false); //! Mobile

    //! First method (part 2)
    if (enable) {
      bodyElement.style.height = "100vh";
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.height = "";
      bodyElement.style.overflow = "";
    }

    //! Clean up
    return () => {
      containerNode.removeEventListener("mousewheel", preventScroll);
      containerNode.removeEventListener("touchmove", preventScroll, false);
    };
  }, [ref, enable]);
};

export default usePreventScroll;
