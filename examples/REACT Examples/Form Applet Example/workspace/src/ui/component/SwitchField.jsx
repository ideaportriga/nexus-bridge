import React from "react";
import AppletContext from "../../api/applet-context";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

const SwitchField = ({ controlName, xs, sm, lg, xl }) => (
  <AppletContext.Consumer>
    {({ handleChangeSwitch, controls }) => (
      <Grid item xs={xs} sm={sm} lg={lg} xl={xl}>
        <Switch
          checked={controls[controlName]["value"] === true}
          value={controls[controlName]["value"] || ""}
          className=""
          helperText={controls[controlName]["required"] ? "Required" : ""}
          color="primary"
          onChange={handleChangeSwitch(controlName)}
        />
        {controls[controlName]["label"]}
      </Grid>
    )}
  </AppletContext.Consumer>
);

export default SwitchField;
