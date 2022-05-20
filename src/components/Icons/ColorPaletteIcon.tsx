import { IoColorPalette } from "react-icons/io5";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";
import CSS from "csstype";

interface ColorPaletteIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  style?: CSS.Properties;
}

const ColorPaletteIcon: React.FC<ColorPaletteIconProps> = (props) => {
  const { size, color, match, className, style } = props;
  const theme = useTheme();

  return (
    <IoColorPalette
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      style={style}
    />
  );
};

export default ColorPaletteIcon;
