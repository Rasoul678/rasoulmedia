import { useTranslation } from "react-i18next";
import USA from "components/Flags/British";
import Spain from "components/Flags/Spain";
import France from "components/Flags/France";
import Iran from "components/Flags/Iran";
import Netherlands from "components/Flags/Netherlands";
import India from "components/Flags/India";

type Code = "fa" | "en" | "es" | "fr" | "nl";

export interface Languages {
  [key: string]: {
    title: string;
    flag: JSX.Element;
  };
}

const useLanguages = (code?: Code) => {
  const { t } = useTranslation();

  const languages: Languages = {
    en: {
      title: t("lang.english"),
      flag: USA(),
    },
    es: {
      title: t("lang.spanish"),
      flag: Spain(),
    },
    fr: {
      title: t("lang.french"),
      flag: France(),
    },
    fa: {
      title: t("lang.persian"),
      flag: Iran(),
    },
    nl: {
      title: t("lang.dutch"),
      flag: Netherlands(),
    },
    hi: {
      title: t("lang.hindi"),
      flag: India(),
    },
  };

  if (code) return languages[code];

  return languages;
};

export default useLanguages;
