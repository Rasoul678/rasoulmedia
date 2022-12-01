import { useTranslation } from "react-i18next";
import British from "components/Flags/British";
import Spain from "components/Flags/Spain";
import France from "components/Flags/France";
import Iran from "components/Flags/Iran";
import Netherlands from "components/Flags/Netherlands";
import India from "components/Flags/India";

export type LangCodeType = "fa" | "en" | "es" | "fr" | "nl" | "hi";

export interface FlagTypes {
  [key: string]: {
    title: string;
    flag: JSX.Element;
  };
}

const useFlags = (code?: LangCodeType) => {
  const { t } = useTranslation();

  const flags: FlagTypes = {
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

  if (code) return flags[code];

  return flags;
};

export default useFlags;
