import React from "react";
import AppletContext from "../../api/applet-context";
import Select from "react-select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";

const PickListField = ({ controlName, xs, sm, lg, xl }) => (
  <AppletContext.Consumer>
    {({ handleChangeList, controls, controls_info }) => (
      <Grid item xs={xs} sm={sm} lg={lg} xl={xl}>
        <div>{controls[controlName]["label"] || ""}</div>
        <Select
          options={controls_info[controlName].lovs.map(lov => {
            return { value: lov.lic, label: lov.lic };
          })}
          value={{
            value: controls[controlName]["value"],
            label: controls[controlName]["value"]
          }}
          onChange={handleChangeList(controlName)}
          placeholder="Search..."
        />
        <FormHelperText>
          {controls[controlName]["required"] ? "Required" : ""}
        </FormHelperText>
      </Grid>
    )}
  </AppletContext.Consumer>
);

export default PickListField;
