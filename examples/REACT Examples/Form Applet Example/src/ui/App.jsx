import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "./component/TextField";
import PickListField from "./component/PickListField";
import SiebelButton from "./component/SiebelButton";
import Title from "./component/Title";
import SwitchField from "./component/SwitchField";
import Snackbar from "./component/Snackbar";
import AppletContext from "../api/applet-context";

const App = () => {
  return (
    <AppletContext.Consumer>
      {({ controls }) => (
        <div>
          <Snackbar />
          <Grid container spacing={8} style={{ padding: 15 }}>
            <Title xs={12} />
            <TextField controlName="Name" xs={4} />
            <TextField controlName="City" xs={4} />
            <TextField controlName="HomePage" xs={4} />
            <TextField controlName="Location" xs={4} />
            <TextField controlName="PostalCode" xs={4} />
            <SwitchField controlName="Fund Eligible Flag" xs={4} />
            <PickListField controlName="AccountStatus" xs={6} />
            <PickListField controlName="AccountTypeCode" xs={3} />
            <PickListField controlName="Type" xs={3} />
            <SiebelButton
              icon="navigate_before"
              action="GotoPreviousSet"
              xs={1}
            />
            <SiebelButton icon="navigate_next" action="GotoNextSet" xs={1} />
            <SiebelButton icon="save" action="WriteRecord" xs={1} />
            {controls.state !== 3 ? (
              <SiebelButton icon="search" action="NewQuery" xs={1} />
            ) : null}
            {controls.state === 3 ? (
              <SiebelButton icon="search" action="ExecuteQuery" xs={1} />
            ) : null}
          </Grid>
        </div>
      )}
    </AppletContext.Consumer>
  );
};

export default App;
