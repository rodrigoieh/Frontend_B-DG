import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AppSnackbar = ({ open, setOpen, errorMessage, incomingMessage }) => {
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("right");

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={incomingMessage === "" ? "error" : "success"}
        sx={{ width: "100%" }}
      >
        {incomingMessage === "" ? errorMessage : incomingMessage}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
