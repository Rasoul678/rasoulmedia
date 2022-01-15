import { components } from "react-select";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ColorPaletteIcon from "components/Icons/ColorPaletteIcon";

const PaletteSelect = (props: any) => (
  <CustomSelect
    {...props}
    components={{
      Control: ({ children, ...rest }) => (
        <components.Control {...rest}>
          <ColorPaletteIcon size={28} />
          {children}
        </components.Control>
      ),
    }}
  />
);

export default PaletteSelect;
