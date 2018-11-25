import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const SuccessSnackbar = ({ open, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
      message={<span id="message-id">Screenshots generated</span>}
    />
  );
};

export default SuccessSnackbar;
