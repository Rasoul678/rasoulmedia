import * as Styled from "./Toggle.styles";

interface ToggleProps {
  onToggle: (value: boolean) => void;
  disabled?: boolean;
  value: boolean;
}

const ToggleButton: React.FC<ToggleProps> = (props) => {
  const { onToggle, disabled, value } = props;

  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!disabled) return;
    const toggleValue = e.target.checked;
    onToggle && onToggle(toggleValue);
  };

  return (
    <Styled.ToggleLabel>
      <Styled.ToggleInput type="checkbox" checked={value} onChange={toggle} />
      <Styled.ToggleButton isChecked={value} />
    </Styled.ToggleLabel>
  );
};

export default ToggleButton;
