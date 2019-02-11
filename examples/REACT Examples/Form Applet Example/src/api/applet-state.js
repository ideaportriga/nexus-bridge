import AppletContext from "./applet-context";
import React from "react";

class Applet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      controls: props.n19Helper.getCurrentRecordModel().controls,
      methods: props.n19Helper.getCurrentRecordModel().methods,
      controls_info: props.n19Helper.getControls()
    };
  }

  componentDidMount = () => {
    this.selectInit();
    this.props.n19Helper.subscribe(() => {
      // to get the update when PM is changed
      this.selectInit();
    });
  };

  selectInit = () => {
    this.setState(this.props.n19Helper.getCurrentRecordModel());
    this.render();
  };

  handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      openSnackbar: false
    });
  };

  handleChangeInput = name => event => {
    this.setControlValue(name, event.target.value);
  };

  handleChangeSwitch = name => event => {
    this.setControlValue(name, event.target.checked);
  };

  handleChangeList = name => obj => {
    this.setControlValue(name, obj.value);
  };

  setControlValue = (name, val) => {
    const ctr = this.state.controls[name];
    const ctrls = {
      ...this.state.controls
    };

    if (!this.props.n19Helper.setControlValue(name, val)) {
      // control is not set successfully
      val = this.props.n19Helper.getCurrentRecord()[ctr.fieldName];
    }

    ctrls[name] = {
      ...ctr
    };
    ctrls[name]["value"] = val;

    this.setState({
      controls: ctrls
    });
  };

  saveRecord = () => {
    this.props.n19Helper.writeRecord(
      () => {
        this.setState({
          snackBarText: "Record is saved!",
          openSnackbar: true
        });
      },
      () => {
        this.setState({
          snackBarText: "Record IS NOT saved!",
          openSnackbar: true
        });
      }
    );
  };

  newQuery = () => {
    this.props.n19Helper.invokeMethod("NewQuery");
  };

  executeQuery = () => {
    this.props.n19Helper.invokeMethod("ExecuteQuery");
  };

  render() {
    // Pass down the state and action
    return (
      <AppletContext.Provider
        value={{
          appletName: this.props.n19Helper.applet.GetAppletLabel(),
          controls: this.state.controls,
          methods: Object.assign(this.state.methods, { ExecuteQuery: true }), // methods don't give information about ExecuteQuery
          controls_info: this.state.controls_info,
          openSnackbar: this.openSnackbar,
          snackBarText: this.state.snackBarText,
          selectInit: this.selectInit,
          handleCloseSnack: this.handleCloseSnack,
          handleChangeInput: this.handleChangeInput,
          handleChangeSwitch: this.handleChangeSwitch,
          handleChangeList: this.handleChangeList,
          WriteRecord: this.saveRecord,
          NewQuery: this.newQuery,
          ExecuteQuery: this.executeQuery,
          GotoPreviousSet: this.props.n19Helper.prevRecord,
          GotoNextSet: this.props.n19Helper.nextRecord,
          n19Helper: this.props.n19Helper // Problem with nextRecord/prevRecord this
        }}
      >
        {this.props.children}
      </AppletContext.Provider>
    );
  }
}

export default Applet;
