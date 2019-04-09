import React, { useEffect, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import InputField from "./components/InputField";
import SelectField from "./components/SelectField";
import SwitchField from "./components/SwitchField";

const Form = ({ n19Helper, accountName }) => {
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

    const token = n19Helper.subscribe(() => {
      selectInit();
    });

    return () => {
      n19Helper.unsubscribe(token);
    };
  }, [accountName]);

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

  const accountTypeList = n19Helper.getStaticLOV("Type").map((lov, id) => (
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

  const handleChangeList = name => event => {
    setControlValue(name, event.target.value);
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
          <InputField
            controlName="Name"
            controlState={fromState["Name"]}
            onChange={handleChangeInput("Name")}
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <SwitchField
            controlName="Fund Eligible Flag"
            controlState={fromState["Fund Eligible Flag"]}
            onChange={handleChangeSwitch("Fund Eligible Flag")}
          />
          &nbsp;Fund Eligible
        </Grid>
      </Grid>

      <Grid container spacing={8} style={{ padding: 15 }}>
        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <SelectField
            controlState={fromState["AccountStatus"]}
            onChange={handleChangeList("AccountStatus")}
            style={{ width: "100%" }}
          >
            {accountStatusList}
          </SelectField>
        </Grid>

        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <SelectField
            controlState={fromState["AccountTypeCode"]}
            onChange={handleChangeList("AccountTypeCode")}
            style={{ width: "100%" }}
          >
            {accountTypeCodeList}
          </SelectField>
        </Grid>

        <Grid item xs={4} sm={4} lg={4} xl={4}>
          <SelectField
            controlState={fromState["Type"]}
            onChange={handleChangeList("Type")}
            style={{ width: "100%" }}
          >
            {accountTypeList}
          </SelectField>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
