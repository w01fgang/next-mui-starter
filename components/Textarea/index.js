// @flow
import React from 'react';
// $flow: TextareaAutosize exist in @material-ui/core package
import { TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// $flow: flow error with colling useStyles
const useStyles = makeStyles({
  root: {
    minHeight: 90,
    border: '1px solid #CED4DA',
    boxSizing: 'border-box',
    borderRadius: 4,
    width: '100%',
    outline: 'none',
    padding: 15,
  },
});

type Props = {
  placeholder?: string,
  onChange: Function,
}

export default function Textarea(props: Props) {
  const { placeholder, onChange } = props;
  const classes = useStyles();

  return (
    <TextareaAutosize
      onChange={({ target }) => onChange(target.value)}
      aria-label="empty textarea"
      placeholder={placeholder}
      className={classes.root}
    />
  );
}

Textarea.defaultProps = {
  placeholder: '',
};
