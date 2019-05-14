import n19Factory from "@ipr/n19factory";
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
  const n19Helper = n19Factory("default");

  // init the applet state
  const _controls = {
    Name: {}
  };
  const _methods = {
    GotoPreviousSet: false,
    GotoNextSet: false,
    WriteRecord: false,
    NewQuery: false
  };
  const initialState = n19Helper.getCurrentRecordModel(_controls, _methods);
  const [state, setState] = useState(initialState);

  // subscribe to methods only
  useEffect(() => {
    const token = n19Helper.subscribe(() => {
      const { methods } = n19Helper.getCurrentRecordModel(_controls, _methods);
      setState({ ...state, methods });
    });

    return () => {
      n19Helper.unsubscribe(token);
    };
  }, [state.methods]);

  const [isOpenSnackbar, toggleSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const [queryMode, setQueryMode] = useState(false);

  const saveRecord = () => {
    n19Helper.writeRecord(
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
    <div className="N19App" style={{ padding: 15 }}>
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
          {n19Helper.appletName} {" rendered by React"}
        </Grid>
      </Grid>

      <Form n19Helper={n19Helper} accountName={state.controls.Name.value} queryMode={queryMode}/>

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
              onClick={() => {setQueryMode(true); n19Helper.invokeMethod("NewQuery")}}
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
              onClick={() => {setQueryMode(false); n19Helper.invokeMethod("ExecuteQuery")}}
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
            onClick={() => n19Helper.prevRecord()}
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
            onClick={() => n19Helper.nextRecord()}
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
