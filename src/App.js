import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import FileUpload from './components/FileUpload';
import service from './service/generate-service';
import ErrorAlert from './components/ErrorAlert';
import CircularProgress from '@material-ui/core/CircularProgress';
import ResultPanel from './components/ResultPanel';
import SuccessSnackbar from './components/SuccessSnackbar';

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  grid: {
    width: '100vw',
    height: '100vh'
  },
  demo: {
    width: '45%',
    minWidth: '22rem',
    maxWidth: '30rem'
  },
  header: {
    textAlign: 'center'
  },
  button: {
    width: '100%',
    margin: theme.spacing.unit,
    marginBottom: '0'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    logo: { path: '' },
    cover: { path: '' },
    showError: false,
    showLoader: false,
    snapshots: undefined,
    showSuccess: false
  };

  onGenerateClicked = async () => {
    const { logo, cover } = this.state;
    if (logo.path && cover.path) {
      this.setState({ showLoader: true });
      try {
        const result = await service.getSnapshots(logo, cover);
        this.setState({ snapshots: result });
      } finally {
        this.setState({ showLoader: false, showSuccess: true });
      }
    } else {
      this.setState({ showError: true });
    }
  };

  onSuccessSnackBarClosed = () => {
    this.setState({ showSuccess: false });
  };

  onLogoChanged = e => {
    const { files, value } = e.target;
    this.setState({ logo: { path: value, file: files[0] } });
  };

  onCoverChanged = e => {
    const { files, value } = e.target;
    this.setState({ cover: { path: value, file: files[0] } });
  };

  closeAlert = () => {
    this.setState({ showError: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Grid item className={classes.demo}>
            <Paper className={classes.paper}>
              {/* <Typography
                variant="display1"
                gutterBottom
                className={classes.header}
              >
                Snapshot App
              </Typography> */}
              <FileUpload
                onChange={this.onLogoChanged}
                value={this.state.logo}
                imageType="Logo"
              />
              <FileUpload
                onChange={this.onCoverChanged}
                value={this.state.cover}
                imageType="Cover"
              />
              <Button
                onClick={this.onGenerateClicked}
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={this.state.showLoader}
              >
                Generate
              </Button>
              {this.state.showLoader && (
                <CircularProgress className={classes.progress} />
              )}
              <br />
              {this.state.snapshots && (
                <ResultPanel snapshots={this.state.snapshots} />
              )}
            </Paper>
          </Grid>
        </Grid>
        {this.state.showError && (
          <ErrorAlert isOpen={this.state.showError} onClose={this.closeAlert} />
        )}
        <SuccessSnackbar
          open={this.state.showSuccess}
          handleClose={this.onSuccessSnackBarClosed}
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
