import React from "react";
import AppletContext from "../../api/applet-context";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const SiebelTextField = ({ controlName, xs, sm, lg, xl }) => (
  <AppletContext.Consumer>
    {({ handleChangeInput, controls }) => (
      <Grid item xs={xs} sm={sm} lg={lg} xl={xl}>
        <TextField
          error={
            !!controls[controlName]["required"] &&
            !controls[controlName]["value"]
          }
          label={controls[controlName]["label"] || ""}
          value={controls[controlName]["value"] || ""}
          placeholder={controls[controlName]["label"] || ""}
          className={"text-field-" + controlName}
          helperText={controls[controlName]["required"] ? "Required" : ""}
          margin="normal"
          style={{ width: "100%" }}
          onChange={handleChangeInput(controlName)}
          inputProps={{
            readOnly: controls[controlName]["readonly"],
            disabled: controls[controlName]["readonly"]
          }}
        />
      </Grid>
    )}
  </AppletContext.Consumer>
);

export default SiebelTextField;
