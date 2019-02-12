import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import AppletContext from "../../api/applet-context";
import Grid from "@material-ui/core/Grid";

const SiebelButton = ({ action, icon, xs, sm, lg, xl }) => (
  <AppletContext.Consumer>
    {value => (
      <Grid item xs={xs} sm={sm} lg={lg} xl={xl}>
        <Button
          disabled={!value.methods[action]}
          style={{ width: "100%" }}
          onClick={() => {
            value[action].bind(value.n19Helper)();
          }}
          variant="contained"
          color="primary"
        >
          <Icon>{icon}</Icon>
        </Button>
      </Grid>
    )}
  </AppletContext.Consumer>
);

export default SiebelButton;
