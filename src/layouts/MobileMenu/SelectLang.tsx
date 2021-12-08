import i18next from "i18next";
import * as Styled from "./MobileMenu.styles";
import useLanguages, { Languages } from "hooks/useLanguages";

interface ISelectLang {
  toggle: () => void;
}

const SelectLang: React.FC<ISelectLang> = (props) => {
  const { toggle } = props;

  const languages = useLanguages();

  const handleSelectLang = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedLang = e.currentTarget.dataset.lang;
    i18next.changeLanguage(selectedLang);
    toggle();
  };

  return (
    <Styled.LangOptionsContainer>
      {Object.entries(languages as Languages).map(([key, value], index) => (
        <Styled.LangOptionWrapper
          key={index}
          data-lang={key}
          onClick={handleSelectLang}
        >
          {value.flag}
          {value.title}
        </Styled.LangOptionWrapper>
      ))}
    </Styled.LangOptionsContainer>
  );
};

export default SelectLang;
