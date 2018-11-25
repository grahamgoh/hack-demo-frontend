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
  },
  image: {
    width: '100%'
  }
});

function ResultPanel(props) {
  const { classes, snapshots } = props;
  const { mobileUrl, desktopUrl, url } = snapshots;

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Result Preview</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <div>
              <Button
                target="_blank"
                href={mobileUrl}
                variant="outlined"
                className={classes.button}
              >
                Mobile
              </Button>

              <Button
                target="_blank"
                href={desktopUrl}
                variant="outlined"
                className={classes.button}
              >
                Desktop
              </Button>

              <Button
                target="_blank"
                href={url}
                variant="outlined"
                className={classes.button}
              >
                Webpage
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
