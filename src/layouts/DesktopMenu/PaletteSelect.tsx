import { components } from "react-select";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ColorPaletteIcon from "components/Icons/ColorPaletteIcon";
import useTheme from "hooks/useTheme";

const PaletteSelect = (props: any) => {
  const theme = useTheme();

  return (
    <CustomSelect
      {...props}
      components={{
        Control: ({ children, ...rest }) => (
          <components.Control {...rest}>
            <ColorPaletteIcon
              color={theme.border}
              style={{ position: "absolute", right: "calc(50% - 1rem)" }}
              size={30}
            />
            {children}
          </components.Control>
        ),
      }}
    />
  );
};

export default PaletteSelect;
