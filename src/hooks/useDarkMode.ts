import { useTypedSelector } from "hooks/useTypedSelector";
import { ThemeType } from "interfaces";
import { invertColor } from "utils/helpers";

const useDarkMode = () => {
  const { selectedPallet, themePallet } = useTypedSelector(
    (state) => state.global
  );

  const { name, pallets } = themePallet;

  // console.log({ selectedPallet, themePallet });

  const theme: ThemeType = {
    name: name,
    colors: pallets[selectedPallet].colors,
    body: pallets[selectedPallet].colors[0],
    text: pallets[selectedPallet].text,
    border: pallets[selectedPallet].mainColor,
    background: pallets[selectedPallet].colors[0],
    buttons: {
      primary: {
        backgroundColor: pallets[selectedPallet].colors[0],
        textColor: invertColor(pallets[selectedPallet].colors[0], true),
      },
      secondary: {
        backgroundColor: pallets[selectedPallet].colors[2],
        textColor: invertColor(pallets[selectedPallet].colors[2], true),
      },
    },
    card: {
      backgroundColor: pallets[selectedPallet].colors[1],
      borderColor: pallets[selectedPallet].colors[2],
      textColor: "#fff",
    },
  };

  return theme;
};

export default useDarkMode;
