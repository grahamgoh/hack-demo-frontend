import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '30vw'
  },
  input: {
    display: 'none'
  }
});

class FileUpload extends Component {
  render() {
    const { classes, imageType, onChange, value } = this.props;
    return (
      <div className={classes.div}>
        <input
          accept="image/*"
          className={classes.input}
          id={imageType}
          type="file"
          value={value.path}
          onChange={onChange}
        />
        <label htmlFor={imageType}>
          <Button
            color="primary"
            variant="outlined"
            component="span"
            className={classes.button}
          >
            Upload {imageType}
          </Button>
        </label>
        <div>
          {value.file && (
            <InputBase
              className={classes.fileInput}
              fullWidth
              readOnly
              required
              value={`${imageType}: ${value.file.name}`}
            />
          )}
        </div>
      </div>
    );
  }
}

FileUpload.propTypes = {
  imageType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired
};

export default withStyles(styles)(FileUpload);
