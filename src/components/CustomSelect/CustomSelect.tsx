import * as Styled from "./CustomSelect.styles";
import Select, { GroupBase, Props } from "react-select";

function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Styled.SelectContainer tabIndex={0}>
      <Select classNamePrefix="select" {...props} />
    </Styled.SelectContainer>
  );
}

export default CustomSelect;
