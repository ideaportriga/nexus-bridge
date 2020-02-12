import { NexusFactory } from "@ideaportriga/nexus-factory";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import Save from "@material-ui/icons/Save";
import Search from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import Form from "./Form";
import List from "./List";

const App = () => {
  // the canonical way to use the applet
  // do not pass as prop or thru context
  const defaultApplet = NexusFactory("default");

  // init the app state
  const _controls = {
    Name: {}
  };
  const _methods = {
    GotoPreviousSet: false,
    GotoNextSet: false,
    WriteRecord: false,
    NewQuery: false
  };
  const initialState = defaultApplet.getCurrentRecordModel(_controls, _methods);
  const [state, setState] = useState(initialState);

  // subscribe to the applet state
  useEffect(() => {
    const token = defaultApplet.subscribe(() => {
      const newState = defaultApplet.getCurrentRecordModel(_controls, _methods);
      setState(newState);
    });

    return () => {
      defaultApplet.unsubscribe(token);
    };
  }, [_controls, _methods, defaultApplet]);

  const [isOpenSnackbar, toggleSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const [queryMode, setQueryMode] = useState(false);

  const saveRecord = () => {
    defaultApplet.writeRecord(
      () => {
        setSnackbarText("Record is saved!");
        toggleSnackbar(true);
      },
      () => {
        setSnackbarText("Record is NOT saved!");
        toggleSnackbar(true);
      }
    );
  };

  return (
    <div className="NexusApp" style={{ padding: 15 }}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={isOpenSnackbar}
        autoHideDuration={4000}
        onClose={() => toggleSnackbar(false)}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{snackbarText}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClose={() => toggleSnackbar(false)}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />

      <Grid container spacing={8} style={{ padding: 15 }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          xl={12}
          style={{ padding: 15, background: "#3f51b5", color: "#fff" }}
        >
          {defaultApplet.appletName} {" rendered by React"}
        </Grid>
      </Grid>

      <Form formApplet={defaultApplet} accountName={state.controls.Name.value} queryMode={queryMode} />

      <Divider variant="middle" />

      <Grid container spacing={8} style={{ padding: 15 }}>
        <Grid item xs={1} sm={1} lg={1} xl={1}>
          <Button
            disabled={!state.methods.WriteRecord}
            style={{ width: "100%" }}
            onClick={saveRecord}
            variant="contained"
            color="primary"
          >
            <Save />
            &nbsp;SAVE
          </Button>
        </Grid>

        {state.controls.state !== 3 ? (
          <Grid item xs={1} sm={1} lg={1} xl={1}>
            <Button
              disabled={!state.methods.NewQuery}
              style={{ width: "100%" }}
              onClick={() => { setQueryMode(true); defaultApplet.invokeMethod("NewQuery") }}
              variant="contained"
              color="primary"
            >
              <Search />
              &nbsp;Search
            </Button>
          </Grid>
        ) : null}

        {state.controls.state === 3 ? (
          <Grid item xs={1} sm={1} lg={1} xl={1}>
            <Button
              disabled={state.controls.state !== 3}
              style={{ width: "100%" }}
              onClick={() => { setQueryMode(false); defaultApplet.invokeMethod("ExecuteQuery") }}
              variant="contained"
              color="primary"
            >
              <Search />
              &nbsp;Run Query
            </Button>
          </Grid>
        ) : null}

        <Grid item xs={8} sm={8} lg={8} xl={8} />

        <Grid item xs={1} sm={1} lg={1} xl={1}>
          <Button
            disabled={!state.methods.GotoPreviousSet}
            style={{ width: "100%" }}
            onClick={() => defaultApplet.prevRecord()}
            variant="contained"
            color="primary"
          >
            <NavigateBefore />
          </Button>
        </Grid>

        <Grid item xs={1} sm={1} lg={1} xl={1}>
          <Button
            disabled={!state.methods.GotoNextSet}
            style={{ width: "100%" }}
            onClick={() => defaultApplet.nextRecord()}
            variant="contained"
            color="primary"
          >
            <NavigateNext />
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={8} style={{ marginTop: 15, padding: 15 }}>
        <Grid item xs={12} sm={12} lg={12} xl={12}>
          <List accountName={state.controls.Name.value} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
