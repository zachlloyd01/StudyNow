import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { toggleSnackbarClose } from "../redux/actions";

const Notification = () => {
  const dispatch = useDispatch();
    
    const SHOW = useSelector((state) => state.toggleSnackbar);
    const MESSAGE = useSelector((state) => state.snackbarMessage);
    const SEVERITY = useSelector((state) => state.severity);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(toggleSnackbarClose());

  };

  
  return (
    <React.Fragment>
      <Snackbar
        open={SHOW} 
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={SEVERITY}
        >
            {MESSAGE}  
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default Notification;
