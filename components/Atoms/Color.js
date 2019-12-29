// @flow
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import cx from 'clsx';

const useStyles = makeStyles({
  colorLabel: {
    border: '1px solid rgba(0, 0, 0, 0.15)',
    boxSizing: 'border-box',
    borderRadius: 20,
    height: 18,
    width: 38,
  },
});

type Props = {|
  +color: string,
  +className?: string,
|};

export default function Color({ color, className }: Props) {
  const classes = useStyles();
  return (
    <div
      className={cx(classes.colorLabel, className)}
      style={{ background: color }}
    />
  );
}
