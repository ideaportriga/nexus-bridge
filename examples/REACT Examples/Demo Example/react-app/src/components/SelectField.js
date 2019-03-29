import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const SelectField = ({
  children,
  controlName,
  controlState,
  onChange,
  style
}) => (
  <div>
    <InputLabel shrink htmlFor={`${controlName}_placeholder`}>
      {controlState.label || ""}
    </InputLabel>
    <Select
      id={controlName}
      error={!!controlState.required && !controlState.value}
      value={controlState.value || ""}
      displayEmpty={controlState.value === "" ? true : false}
      input={
        <Input
          name={"Type"}
          id={`${controlName}_placeholder`}
          readOnly={controlState.readonly ? true : false}
        />
      }
      onChange={onChange}
      style={style}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {children}
    </Select>
    {controlState.readonly && <FormHelperText>Read only</FormHelperText>}
    {controlState.required && <FormHelperText>Required</FormHelperText>}
  </div>
);

export default SelectField;
