import React from "react";
import AppletContext from "../../api/applet-context";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SiebelTextField = ({ controlName, xs, sm, lg, xl }) => (
  <AppletContext.Consumer>
    {({ snackBarText, handleCloseSnack, openSnackbar }) => (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnack}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{snackBarText}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleCloseSnack}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    )}
  </AppletContext.Consumer>
);

export default SiebelTextField;
