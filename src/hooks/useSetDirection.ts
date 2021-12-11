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

  useEffect(() => {
    document.body.style.direction = i18n.dir(i18n.language);
    window.direction = i18n.dir(i18n.language);
    window.float = i18n.dir(i18n.language) === "ltr" ? "left" : "right";
    window.revFloat = i18n.dir(i18n.language) === "ltr" ? "right" : "left";
  }, [i18n.language, i18n]);
};

export default useSetDirection;
