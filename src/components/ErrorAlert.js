import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';
import React from 'react';

const ErrorAlert = ({ isOpen, onClose }) => {
  return (
    <React.Fragment>
      <Dialog open={isOpen} keepMounted onClose={onClose}>
        <DialogContent>
          <DialogContentText>
            Please provide a logo and a cover photo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

ErrorAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ErrorAlert;
