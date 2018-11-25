import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  button: {
    margin: theme.spacing.unit
  },
  atag: {
    textDecoration: 'none'
  }
});

function ResultPanel(props) {
  const { classes, snapshots } = props;
  const { mobileUrl, desktopUrl, url } = snapshots;

  // const mobileUrl =
  //   'http://localhost:3000/snapshot/mobile/1a7eeb30-f052-11e8-b610-ddd470519f6e';
  // const desktopUrl =
  //   'http://localhost:3000/snapshot/desktop/1a7eeb30-f052-11e8-b610-ddd470519f6e';

  // const url = '';
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Result Snapshots</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <div>
              <Button variant="outlined" className={classes.button}>
                <a
                  className={classes.atag}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={mobileUrl}
                >
                  Mobile
                </a>
              </Button>

              <Button variant="outlined" className={classes.button}>
                <a
                  className={classes.atag}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={desktopUrl}
                >
                  Desktop
                </a>
              </Button>

              <Button variant="outlined" className={classes.button}>
                <a
                  className={classes.atag}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}
                >
                  Real Page
                </a>
              </Button>
            </div>
            <div>
              <img className={classes.image} src={mobileUrl} alt="mobile" />
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

ResultPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  snapshots: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultPanel);
