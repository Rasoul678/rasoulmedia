import { ThemeType } from "interfaces";
import { invertColor } from "utils/helpers";
import { useStore } from "store/store";

const useTheme = () => {
  const { store } = useStore();
  const { selectedPallet, themePallet } = store.global;

  const { name, pallets } = themePallet;

  const theme: ThemeType = {
    name: name,
    colors: pallets[selectedPallet].colors,
    body: pallets[selectedPallet].colors[0],
    text: pallets[selectedPallet].text,
    border: pallets[selectedPallet].mainColor,
    background: pallets[selectedPallet].colors[0],
    buttons: {
      primary: {
        backgroundColor: pallets[selectedPallet].mainColor,
        textColor: invertColor(pallets[selectedPallet].colors[2], true),
      },
      secondary: {
        backgroundColor: pallets[selectedPallet].mainColor,
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

export default useTheme;
