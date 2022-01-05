import { useEffect } from "react";
import { useTranslation } from "react-i18next";

declare global {
  interface Window {
    direction: string;
    float: string;
    revFloat: string;
  }
}

const useSetDirection = () => {
  const { i18n } = useTranslation();
  const direction = i18n.dir(i18n.language);
  const float = i18n.dir(i18n.language) === "ltr" ? "left" : "right";
  const revFloat = i18n.dir(i18n.language) === "ltr" ? "right" : "left";

  useEffect(() => {
    document.body.style.direction = direction;
    window.direction = direction;
    window.float = float;
    window.revFloat = revFloat;
  }, [direction, float, revFloat]);

  return { direction, float, revFloat };
};

export default useSetDirection;
