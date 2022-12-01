import { useCallback } from "react";
import * as Styled from "./MobileMenu.styles";
import { useTheme } from "styled-components";
import { useStore } from "store/store";

interface ISelectLang {
  toggle: () => void;
}

const SelectPalette: React.FC<ISelectLang> = ({ toggle }) => {
  const { colors } = useTheme();
  const { store, actions } = useStore();
  const { selectedPallet, themePallet } = store.global;
  const { setThemePalette } = actions;

  const handleSelectPalette = useCallback((palette: string) => {
    return () => {
      toggle();
      setThemePalette(palette);
    };
  }, []);

  return (
    <Styled.LangOptionsContainer style={{ width: "12rem" }}>
      {Object.entries(themePallet.pallets).map(([key, value], index) => (
        <Styled.LangOptionWrapper
          style={{ borderRadius: "50%" }}
          key={index}
          onClick={handleSelectPalette(key)}
        >
          <Styled.PaletteCircle
            isSelected={selectedPallet === key}
            bgColor={(value as any).mainColor}
            themeColor={colors[2]}
          />
        </Styled.LangOptionWrapper>
      ))}
    </Styled.LangOptionsContainer>
  );
};

export default SelectPalette;
