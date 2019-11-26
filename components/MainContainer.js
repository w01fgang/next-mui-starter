// @flow
import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

const styles = {
  item: {
    maxWidth: 1366,
  },
};

type Props = {|
  children: React$Node,
  classes: { [key: $Keys<typeof styles>]: string },
|};

class MainContainer extends PureComponent<Props> {
  render() {
    const { children, classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={11} md={10} className={classes.item}>
          {children}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MainContainer);
