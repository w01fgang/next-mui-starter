// @flow strict
import React from 'react';
import MuiSvgIcon from '@material-ui/core/SvgIcon';
import withStyles from '@material-ui/styles/withStyles';

const SvgIcon = withStyles({
  root: {
    height: 30,
  },
})(MuiSvgIcon);

const BadSatisfiedIcon = (props: $FlowFixMe) => (
  <SvgIcon fill="none" viewBox=" 0 0 22 22" {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M13.8 10.2c.664 0 1.2-.536 1.2-1.2 0-.664-.536-1.2-1.2-1.2-.664 0-1.2.536-1.2 1.2 0 .664.536 1.2 1.2 1.2zm-5.6 0c.664 0 1.2-.536 1.2-1.2 0-.664-.536-1.2-1.2-1.2C7.536 7.8 7 8.336 7 9c0 .664.536 1.2 1.2 1.2zm2.8 2A4.397 4.397 0 006.912 15S9.3 13.5 11 13.5c1.7 0 4.088 1.5 4.088 1.5A4.397 4.397 0 0011 12.2z" fill="#fff" />
  </SvgIcon>
);

export default BadSatisfiedIcon;
