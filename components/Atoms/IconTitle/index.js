// @flow
import React, { memo } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
  },
  icon: {
    marginLeft: 14,
    marginRight: 10,
    color: theme.palette.text.secondary,
    fontSize: 20,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

type Props = {|
  +icon: React$Element<*>,
  +children: React$Node,
|};

function IconTitle(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.icon}>{props.icon}</span>
      <Typography variant="subtitle2" className={classes.text}>{props.children}</Typography>
    </div>
  );
}

export default memo<Props>(IconTitle);
