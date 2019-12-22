// @flow
import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

type Props = {
  style: {},
  onClick: Function,
  disabled: boolean,
  title: string,
  classes: {}
};

const styles = {
  root: {
    width: '241px',
    textTransform: 'unset',
    border: 'none',
    height: '44px',
    color: 'white',
    background: '#1E88E5',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25), 0px -1px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  },
};

// this component was written because exciting Button component unreuseble;
const TestButton = (props: Props) => {
  const {
    style, onClick, disabled, title, classes, ...rest
  } = props;

  return (
    <Button
      {...rest}
      style={style}
      classes={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default withStyles(styles)(TestButton);
