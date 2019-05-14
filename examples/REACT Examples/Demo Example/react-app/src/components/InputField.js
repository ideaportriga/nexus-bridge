import React from "react";
import TextField from "@material-ui/core/TextField";

const InputField = ({ controlName, controlState, onChange, queryMode, style }) => (
  <TextField
    id={controlName}
    error={!queryMode && !!controlState.required && !controlState.value}
    label={controlState.label || ""}
    value={controlState.value || ""}
    helperText={controlState.required ? "Required" : ""}
    inputProps={{
      readOnly: controlState.readonly,
      disabled: controlState.readonly
    }}
    onChange={onChange}
    style={style}
  />
);

export default InputField;
