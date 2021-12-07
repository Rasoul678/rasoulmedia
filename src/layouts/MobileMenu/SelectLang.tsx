import * as Styled from "./MobileMenu.styles";
import i18next from "i18next";

interface ISelectLang {
  languages: { [key: string]: string };
  toggle: () => void;
}

const SelectLang: React.FC<ISelectLang> = (props) => {
  const { languages, toggle } = props;

  const handleSelectLang = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedLang = e.currentTarget.dataset.lang;
    i18next.changeLanguage(selectedLang);
    toggle();
  };

  return (
    <Styled.LangOptionsContainer>
      {Object.entries(languages).map(([key, value], index) => (
        <Styled.LangOptionWrapper
          key={index}
          data-lang={key}
          onClick={handleSelectLang}
        >
          {value}
        </Styled.LangOptionWrapper>
      ))}
    </Styled.LangOptionsContainer>
  );
};

export default SelectLang;
