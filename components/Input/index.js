// @flow
import React, { useCallback, useState } from 'react';

import { Input, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';

type Props = {
  placeholder?: string,
  outlinePlaceholder?: boolean,
  icon?: any,
  value?: string,
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
    position: 'relative',
  },
  placeholder: {
    transition: 'all 0.5s ease',
    position: 'absolute',
    top: '-22px',
    background: 'white',
    padding: '0 4px',
  },
  icon: {
    marginLeft: 5,
  },
});

function CustomInput(props: Props) {
  const {
    placeholder, icon: Icon, onChange, outlinePlaceholder, value, 
  } = props;
  const classes = useStyles();
  const [inputValue, setValue] = useState(value);

  const handleChange = useCallback(({ target }) => {
    setValue(target.value);
    onChange(target.value);
  }, [setValue]);

  return (
    <Grid className={classes.container}>
      { inputValue && outlinePlaceholder && <p className={classes.placeholder}>{placeholder}</p>}
      <StyledInput
        disableUnderline
        fullWidth
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        inputProps={{ classes: { input: classes.input } }}
      />
      { Icon && <Icon className={classes.icon} /> }
    </Grid>
  );
}

CustomInput.defaultProps = {
  icon: null,
  placeholder: '',
  value: '',
  outlinePlaceholder: false,
  onChange: () => {},
};

export default CustomInput;
