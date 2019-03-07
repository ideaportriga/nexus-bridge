import React, { useEffect, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormHelperText from "@material-ui/core/FormHelperText";
import n19Factory from "./n19Factory";

const Form = props => {
  // the canonical way to use the applet
  // do not pass as prop or thru context
  const n19Helper = n19Factory();

  const initialState = {
    Name: {},
    AccountStatus: {},
    AccountTypeCode: {},
    "Fund Eligible Flag": {},
    Type: {}
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "setField":
        return {
          ...state,
          [action.data.id]: action.data.value
        };
      case "reset":
        return initialState;
      default:
        throw new Error();
    }
  };

  const [fromState, dispatch] = useReducer(formReducer, initialState);

  const selectInit = () => {
    let newControls = { ...fromState };

    n19Helper.getCurrentRecordModel(newControls);

    Object.keys(newControls).map(id =>
      dispatch({
        type: "setField",
        data: {
          id,
          value: newControls[id]
        }
      })
    );
  };

  // subscribe to account name
  useEffect(() => {
    selectInit();

    n19Helper.subscribe(() => {
      selectInit();
    });

    return () => {
      n19Helper.unsubscribe();
    };
  }, [props.accountName]);

  const accountStatusList = n19Helper
    .getStaticLOV("AccountStatus")
    .map((lov, id) => (
      <MenuItem key={`AccountStatus_${id}`} value={lov}>
        {lov}
      </MenuItem>
    ));

  const accountTypeCodeList = n19Helper
    .getStaticLOV("AccountTypeCode")
    .map((lov, id) => (
      <MenuItem key={`AccountTypeCode_${id}`} value={lov}>
        {lov}
      </MenuItem>
    ));

  const accountTypeList = n19Helper
    .getStaticLOV("Type")
    .map((lov, id) => (
      <MenuItem key={`Type_${id}`} value={lov}>
        {lov}
      </MenuItem>
    ));

  const handleChangeInput = name => event => {
    setControlValue(name, event.target.value);
  };

  const handleChangeSwitch = name => event => {
    setControlValue(name, event.target.checked);
  };

  const handleChangeList = event => {
    setControlValue(event.target.name, event.target.value);
  };

  const setControlValue = (id, value) => {
    if (!n19Helper.setControlValue(id, value)) {
      value = n19Helper.getCurrentRecord()[fromState[id].fieldName];
    }

    dispatch({
      type: "setField",
      data: {
        id,
        value: {
          ...fromState[id],
          value
        }
      }
    });
  };

  return (
    <div>
      <Grid container spacing={8} style={{ padding: 15 }}>
        <Grid item xs={8} sm={8} lg={8} xl={8}>
          <TextField
            id="account-name"
            error={
              !!fromState["Name"]["required"] && !fromState["Name"]["value"]
            }
            label={fromState["Name"]["label"] || ""}
            value={fromState["Name"]["value"] || ""}
            helperText={fromState["Name"]["required"] ? "Required" : ""}
            inputProps={{
              readOnly: fromState["Name"]["readonly"],
              disabled: fromState["Name"]["readonly"]
            }}
            style={{ width: "100%" }}
            onChange={handleChangeInput("Name")}
          />
        </Grid>

        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <Switch
            checked={fromState["Fund Eligible Flag"]["value"] === true}
            onChange={handleChangeSwitch("Fund Eligible Flag")}
            value={fromState["Fund Eligible Flag"]["value"]}
            inputProps={{
              readOnly: fromState["Fund Eligible Flag"]["readonly"],
              disabled: fromState["Fund Eligible Flag"]["readonly"]
            }}
            color="primary"
          />{" "}
          Fund Eligible
        </Grid>
      </Grid>

      <Grid container spacing={8} style={{ padding: 15 }}>
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <InputLabel shrink htmlFor="type-placeholder">
            {fromState["AccountStatus"]["label"] || ""}
          </InputLabel>
          <Select
            value={fromState["AccountStatus"].value}
            onChange={handleChangeList}
            input={
              <Input
                name={"AccountStatus"}
                id="AccountStatus-readonly"
                readOnly={fromState["AccountStatus"].readonly ? true : false}
              />
            }
            style={{ width: "100%" }}
          >
            {accountStatusList}
          </Select>
          {fromState["AccountStatus"].readonly && (
            <FormHelperText>Read only</FormHelperText>
          )}
          {fromState["AccountStatus"].required && (
            <FormHelperText>Required</FormHelperText>
          )}
        </Grid>

        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <InputLabel shrink htmlFor="type-placeholder">
            {fromState["AccountTypeCode"]["label"] || ""}
          </InputLabel>
          <Select
            value={fromState["AccountTypeCode"].value}
            onChange={handleChangeList}
            input={
              <Input
                name={"AccountTypeCode"}
                id="AccountTypeCode-readonly"
                readOnly={fromState["AccountTypeCode"].readonly ? true : false}
              />
            }
            style={{ width: "100%" }}
          >
            {accountTypeCodeList}
          </Select>
          {fromState["AccountTypeCode"].readonly && (
            <FormHelperText>Read only</FormHelperText>
          )}
          {fromState["AccountTypeCode"].required && (
            <FormHelperText>Required</FormHelperText>
          )}
        </Grid>

        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <InputLabel shrink htmlFor="type-placeholder">
            {fromState["Type"]["label"] || ""}
          </InputLabel>
          <Select
            value={fromState["Type"].value}
            onChange={handleChangeList}
            input={
              <Input
                name={"Type"}
                id="type-placeholder"
                readOnly={fromState["Type"].readonly ? true : false}
              />
            }
            style={{ width: "100%" }}
            displayEmpty={fromState["Type"].value === "" ? true : false}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {accountTypeList}
          </Select>
          {fromState["Type"].readonly && (
            <FormHelperText>Read only</FormHelperText>
          )}
          {fromState["Type"].required && (
            <FormHelperText>Required</FormHelperText>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
