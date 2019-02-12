import React from "react";
import AppletContext from "../../api/applet-context";
import Grid from "@material-ui/core/Grid";
import MuiDownshift from "mui-downshift";

const PickListField = ({ controlName, xs, sm, lg, xl }) => (
  <AppletContext.Consumer>
    {({ handleChangeList, controls, controls_info }) => (
      <Grid item xs={xs} sm={sm} lg={lg} xl={xl}>
        <MuiDownshift
          getInputProps={() => ({ endAdornment: null })}
          items={controls_info[controlName].lovs.map(lov => {
            return { label: lov.lic, value: lov.lic };
          })}
          onChange={handleChangeList(controlName)}
          inputValue={controls[controlName]["value"]}
          initialSelectedItem={{
            label: controls[controlName]["value"],
            value: controls[controlName]["value"]
          }}
        />
      </Grid>
    )}
  </AppletContext.Consumer>
);

export default PickListField;
