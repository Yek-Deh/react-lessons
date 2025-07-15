import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function MySnackbar({open,message}) {

  return (
    <div>
      
      <Snackbar
        open={open}
        autoHideDuration={6000}
       
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
         
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
