import React from "react";
import AppletContext from "../../api/applet-context";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const Title = ({ controlName, xs, sm, lg, xl }) => (
  <AppletContext.Consumer>
    {({ appletName }) => (
      <Grid item xs={xs} sm={sm} lg={lg} xl={xl}>
        <AppBar />
        <Typography variant="h6" color="inherit">
          {appletName}
        </Typography>
      </Grid>
    )}
  </AppletContext.Consumer>
);

export default Title;
