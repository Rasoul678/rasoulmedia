import { components } from "react-select";
import CustomSelect from "components/CustomSelect/CustomSelect";
import ColorPaletteIcon from "components/Icons/ColorPaletteIcon";

const PaletteSelect = (props: any) => (
  <CustomSelect
    {...props}
    components={{
      Control: ({ children, ...rest }) => (
        <components.Control {...rest}>
          <ColorPaletteIcon style={{ position: "absolute", right: 'calc(50% - 1rem)' }} size={30} />
          {children}
        </components.Control>
      ),
    }}
  />
);

export default PaletteSelect;
