import { useCallback } from "react";
import i18next from "i18next";
import * as Styled from "./MobileMenu.styles";
import useFlags, { FlagTypes } from "hooks/useFlags";

interface ISelectLang {
  toggle: () => void;
}

const SelectLanguage: React.FC<ISelectLang> = (props) => {
  const { toggle } = props;

  const falgs = useFlags();

  const handleSelectLanguage = useCallback((language: string) => {
    return () => {
      //! Reload for rtl.
      if (language === "fa" || i18next.language === "fa") {
        window.location.reload();
      }

      i18next.changeLanguage(language);
      toggle();
    };
  }, []);

  return (
    <Styled.LangOptionsContainer>
      {Object.entries(falgs as FlagTypes).map(([key, value], index) => (
        <Styled.LangOptionWrapper
          key={index}
          onClick={handleSelectLanguage(key)}
        >
          <Styled.FlagWrapper isSelected={i18next.language === key}>
            {value.flag}
            {value.title}
          </Styled.FlagWrapper>
        </Styled.LangOptionWrapper>
      ))}
    </Styled.LangOptionsContainer>
  );
};

export default SelectLanguage;
