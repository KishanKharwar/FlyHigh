import Dialog from '@mui/material/Dialog';
import * as React from 'react';

export default function CustomDialog({open, handleClose, children, ...rest}) {
  
  return (
   
      <Dialog
        {...rest}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          {children}
      </Dialog>
  );
}