import { useCallback } from "react";
import * as Styled from "./MobileMenu.styles";
import { useTypedSelector } from "hooks/useTypedSelector";
import useActions from "hooks/useActions";
import ColorPickLottie from "../../components/Lotties/ColorPick";

interface ISelectLang {
  toggle: () => void;
}

const SelectPalette: React.FC<ISelectLang> = ({ toggle }) => {
  const { setThemePalette } = useActions();

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
    <Styled.LangOptionsContainer>
      {Object.entries(themePallet.pallets).map(([key, value], index) => (
        <Styled.LangOptionWrapper
          style={{ borderRadius: "50%" }}
          key={index}
          onClick={handleSelectPalette(key)}
        >
          <Styled.PaletteCircle
            isSelected={selectedPallet === key}
            color={value.mainColor}
          >
            {selectedPallet === key && (
              <ColorPickLottie name={value.mainColor} color={value.name} />
            )}
          </Styled.PaletteCircle>
        </Styled.LangOptionWrapper>
      ))}
    </Styled.LangOptionsContainer>
  );
};

export default SelectPalette;
