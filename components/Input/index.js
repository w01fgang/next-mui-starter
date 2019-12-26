// @flow
import React from 'react';

import { Input, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';

type Props = {
  placeholder?: string,
  icon?: any,
  onChange?: (SyntheticInputEvent<HTMLInputElement>) => void
}

const StyledInput = withStyles({
  input: {
    '&::placeholder': {
      fontWeight: '500',
      fontSize: '14px',
      color: '#455A64',
    },
  },
})(Input);

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
  icon: {
    marginLeft: 5,
  },
});

function CustomInput(props: Props) {
  const { placeholder, icon: Icon, onChange } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <StyledInput
        disableUnderline
        fullWidth
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
