import { useCallback } from "react";
import * as Styled from "./MobileMenu.styles";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";
import { useTheme } from "styled-components";

interface ISelectLang {
  toggle: () => void;
}

const SelectPalette: React.FC<ISelectLang> = ({ toggle }) => {
  const { setThemePalette } = useActions();
  const { colors } = useTheme();

  const { selectedPallet, themePallet } = useTypedSelector(
    (state) => state.global
  );

  const handleSelectPalette = useCallback((palette: string) => {
    return () => {
      toggle();
      setThemePalette(palette);
    };
  }, []);

  return (
    <Styled.LangOptionsContainer style={{width: '12rem'}}>
      {Object.entries(themePallet.pallets).map(([key, value], index) => (
        <Styled.LangOptionWrapper
          style={{ borderRadius: "50%" }}
          key={index}
          onClick={handleSelectPalette(key)}
        >
          <Styled.PaletteCircle
            isSelected={selectedPallet === key}
            bgColor={value.mainColor}
            themeColor={colors[2]}
          />
        </Styled.LangOptionWrapper>
      ))}
    </Styled.LangOptionsContainer>
  );
};

export default SelectPalette;
