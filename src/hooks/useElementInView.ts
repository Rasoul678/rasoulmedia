import { useEffect, useRef, useState } from "react";

interface IntersectionOptions extends IntersectionObserverInit {
  /** The IntersectionObserver interface's read-only `root` property identifies the Element or Document whose bounds are treated as the bounding box of the viewport for the element which is the observer's target. If the `root` is null, then the bounds of the actual document viewport are used.*/
  root?: Element | null;
  /** Margin around the root. Can have values similar to the CSS margin property, e.g. `10px 20px 30px 40px` (top, right, bottom, left). */
  rootMargin?: string;
  /** Number between `0` and `1` indicating the percentage that should be visible before triggering. Can also be an `array` of numbers, to create multiple trigger points. */
  threshold?: number | number[];
}

type HookResponse = [React.RefObject<HTMLDivElement>, boolean];

const useElementInView = (options: IntersectionOptions): HookResponse => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisibile, setIsVisibile] = useState(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setIsVisibile(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    let container = containerRef.current;

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisibile];
};

export default useElementInView;
