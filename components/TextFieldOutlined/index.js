// @flow
import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root.Mui-error': {
      '& fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
        borderColor: theme.palette.outlineInput,
        borderWidth: 2,
      },
    },
  },
}));

const TextFieldOutlined = (props: $FlowFixMe) => {
  const classes = useStyles();

  return <TextField {...props} classes={classes} variant="outlined" />;
};

export default TextFieldOutlined;
