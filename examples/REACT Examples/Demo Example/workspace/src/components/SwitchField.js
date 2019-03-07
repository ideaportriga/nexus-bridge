import React from "react";
import Switch from "@material-ui/core/Switch";

const SwitchField = ({ controlName, controlState, onChange }) => (
  <Switch
    id={controlName}
    checked={controlState.value === true}
    value={controlState.value}
    inputProps={{
      readOnly: controlState.readonly,
      disabled: controlState.readonly
    }}
    color="primary"
    onChange={onChange}
  />
);

export default SwitchField;
