import { useTranslation } from "react-i18next";
import British from "components/Flags/British";
import Spain from "components/Flags/Spain";
import France from "components/Flags/France";
import Iran from "components/Flags/Iran";
import Netherlands from "components/Flags/Netherlands";
import India from "components/Flags/India";

type Code = "fa" | "en" | "es" | "fr" | "nl" | "hi";

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
      title: t("lang.en"),
      flag: British(),
    },
    es: {
      title: t("lang.es"),
      flag: Spain(),
    },
    fr: {
      title: t("lang.fr"),
      flag: France(),
    },
    fa: {
      title: t("lang.fa"),
      flag: Iran(),
    },
    nl: {
      title: t("lang.nl"),
      flag: Netherlands(),
    },
    hi: {
      title: t("lang.hi"),
      flag: India(),
    },
  };

  if (code) return languages[code];

  return languages;
};

export default useLanguages;
