import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import FormHelperText from '@material-ui/core/FormHelperText';

class App extends Component {
  state = {
    controls: {
      Name: {},
      AccountStatus: {},
      AccountTypeCode: {},
      'Fund Eligible Flag': {},
      Type: {}
    },
    methods: {
      GotoPreviousSet: false,
      GotoNextSet: false,
      WriteRecord: false,
      NewQuery: false
    },
    accountStatusList: this.props.n19Helper.getStaticLOV('AccountStatus').map(lov => {
      return {
        value: lov,
        label: lov
      }
    }),
    accountTypeCodeList: this.props.n19Helper.getStaticLOV('AccountTypeCode').map(lov => {
      return {
        value: lov,
        label: lov
      }
    }),
    accountTypeList: this.props.n19Helper.getStaticLOV('Type').map(lov => {
      return {
        value: lov,
        label: lov
      }
    }),
    openSnackbar: false
  }

  componentDidMount = () => {
    this.selectInit();
    this.props.n19Helper.subscribe(() => { // to get the update when PM is changed
      this.selectInit();
    });
  }

  selectInit = () => {
    const controls = { ...this.state.controls };
    const methods = { ...this.state.methods };
    this.props.n19Helper.getCurrentRecordModel(controls, methods);
    const newState = { controls, methods };
    this.setState(newState);
    this.render();
  }

  handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ openSnackbar: false });
  };

  handleChangeInput = name => event => {
    this.setControlValue(name, event.target.value);
  }

  handleChangeSwitch = name => event => {
    this.setControlValue(name, event.target.checked);
  }

  handleChangeList = name => obj => {
    this.setControlValue(name, obj.value);
  }

  setControlValue = (name, val) => {
    const ctr = this.state.controls[name];
    const ctrls = { ...this.state.controls };

    if (!this.props.n19Helper.setControlValue(name, val)) { // control is not set successfully
      val = this.props.n19Helper.getCurrentRecord()[ctr.fieldName];
    }

    ctrls[name] = { ...ctr };
    ctrls[name]['value'] = val;

    this.setState({ controls: ctrls });
  }

  saveRecord = () => {
    this.props.n19Helper.writeRecord(() => {
      this.setState({ snackBarText: 'Record is saved!', openSnackbar: true });
    }, () => {
      this.setState({ snackBarText: 'Record IS NOT saved!', openSnackbar: true });
    });
  }

  newQuery = () => {
    this.props.n19Helper.invokeMethod('NewQuery');
  }

  executeQuery = () => {
    this.props.n19Helper.invokeMethod('ExecuteQuery');
  }

  render() {
    return (
      <div className="N19App" style={{ padding: 15 }}>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.openSnackbar}
          autoHideDuration={4000}
          onClose={this.handleCloseSnack}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.snackBarText}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"

              onClick={this.handleCloseSnack}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />

        <Grid container spacing={8} style={{ padding: 15, background: '#3f51b5', color: '#fff' }}>
          {this.props.n19Helper.appletName} {' rendered by React'}
        </Grid>

        <Grid container spacing={8} style={{ padding: 15 }}>

          <Grid item xs={6} sm={6} lg={6} xl={6}>
            <TextField
              id="account-name"
              error={!!this.state.controls.Name['required']}
              label={this.state.controls.Name['label'] || ''}
              value={this.state.controls.Name['value'] || ''}
              className=''
              helperText={this.state.controls.Name['required'] ? 'Required' : ''}
              margin="normal"
              style={{ width: '100%' }}
              onChange={this.handleChangeInput('Name')}
            />
          </Grid>

          <Grid item xs={3} sm={3} lg={3} xl={3}>
            <Switch
              checked={this.state.controls['Fund Eligible Flag']['value'] === true}
              onChange={this.handleChangeSwitch('Fund Eligible Flag')}
              value={this.state.controls['Fund Eligible Flag']['value']}
              color="primary"
            /> Fund Eligible
          </Grid>
        </Grid>

        <Grid container spacing={8} style={{ padding: 15 }}>

          <Grid item xs={3} sm={3} lg={3} xl={3}>
            <div>{this.state.controls.AccountStatus['label'] || ''}</div>
            <Select
              options={this.state.accountStatusList}
              value={{ value: this.state.controls.AccountStatus['value'], label: this.state.controls.AccountStatus['value'] }}
              onChange={this.handleChangeList('AccountStatus')}
              placeholder="Search..."
            />
            <FormHelperText>{this.state.controls.AccountStatus['required'] ? 'Required' : ''}</FormHelperText>
          </Grid>

          <Grid item xs={3} sm={3} lg={3} xl={3}>
            <div>{this.state.controls.AccountTypeCode['label'] || ''}</div>
            <Select
              options={this.state.accountTypeCodeList}
              value={{ value: this.state.controls.AccountTypeCode['value'], label: this.state.controls.AccountTypeCode['value'] }}
              onChange={this.handleChangeList('AccountTypeCode')}
              placeholder="Search..."
            />
            <FormHelperText>{this.state.controls.AccountTypeCode['required'] ? 'Required' : ''}</FormHelperText>
          </Grid>

          <Grid item xs={3} sm={3} lg={3} xl={3}>
            <div>{this.state.controls.Type['label'] || ''}</div>
            <Select
              options={this.state.accountTypeList}
              value={{ value: this.state.controls.Type['value'], label: this.state.controls.Type['value'] }}
              onChange={this.handleChangeList('Type')}
              placeholder="Search..."
            />
            <FormHelperText>{this.state.controls.Type['required'] ? 'Required' : ''}</FormHelperText>
          </Grid>
        </Grid>

        <Divider variant="middle" />

        <Grid container spacing={8} style={{ padding: 15 }}>
          <Grid item xs={1} sm={1} lg={1} xl={1}>
            <Button disabled={!this.state.methods.WriteRecord} style={{ width: '100%' }} onClick={this.saveRecord} variant="contained" color="primary">
              <Icon>save</Icon>SAVE
              </Button>
          </Grid>

          { this.state.controls.state !== 3 ? <Grid item xs={1} sm={1} lg={1} xl={1}>
            <Button disabled={!this.state.methods.NewQuery} style={{ width: '100%' }} onClick={this.newQuery} variant="contained" color="primary">
              <Icon>search</Icon>Search
              </Button>
          </Grid> : null }

          { this.state.controls.state === 3 ? <Grid item xs={1} sm={1} lg={1} xl={1}>
            <Button disabled={this.state.controls.state !== 3} style={{ width: '100%' }} onClick={this.executeQuery} variant="contained" color="primary">
              <Icon>search</Icon>Run
              </Button>
          </Grid> : null }


          <Grid item xs={8} sm={8} lg={8} xl={8} />

          <Grid item xs={1} sm={1} lg={1} xl={1}>
            <Button disabled={!this.state.methods.GotoPreviousSet} style={{ width: '100%' }} onClick={() => { this.props.n19Helper.prevRecord(); }} variant="contained" color="primary">
              <Icon>navigate_before</Icon>
            </Button>
          </Grid>

          <Grid item xs={1} sm={1} lg={1} xl={1}>
            <Button disabled={!this.state.methods.GotoNextSet} style={{ width: '100%' }} onClick={() => { this.props.n19Helper.nextRecord(); }} variant="contained" color="primary">
              <Icon>navigate_next</Icon>
            </Button>
          </Grid>
        </Grid>

      </div >
    );
  }
}

export default App;
