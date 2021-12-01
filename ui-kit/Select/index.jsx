import React from "react";
import { StyledSelectContainer } from "./styles";
import SelectComponent from "react-select";

const Select = ({
  options,
  onChange,
  value,
  defaultValue,
  scroll,
  width,
  fontSize,
  withCard
}) => {

  return (
    <StyledSelectContainer scroll={scroll} width={width} fontSize={fontSize} withCard={withCard}>
      <SelectComponent
        options={options}
        classNamePrefix="Select"
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        isSearchable={false}
        id="react-select-3-input"
        inputId="react-select-4-input"
      />
    </StyledSelectContainer>
  );
};

export default Select;
