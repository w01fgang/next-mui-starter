// @flow
import React from 'react';

import { Input, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type Props = {
  placeholder?: string,
  icon?: any,
  onChange?: (SyntheticInputEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    height: 48,
    border: '1px solid #CED4DA',
    boxSizing: 'border-box',
    borderRadius: 4,
    width: '100%',
  },
  placeholder: {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: 'blue',
    },
  },
  icon: {
    marginLeft: 5,
  },
});

function CustomInput(props: Props) {
  const { placeholder, icon: Icon, onChange } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Input
        disableUnderline
        fullWidth
        className={classes.placeholder}
        placeholder={placeholder}
        onChange={onChange}
        inputProps={{ classes: { input: classes.input } }}
      />
      { Icon && <Icon className={classes.icon} /> }
    </Grid>
  );
}

CustomInput.defaultProps = {
  icon: null,
  placeholder: '',
  onChange: () => {},
};

export default CustomInput;
