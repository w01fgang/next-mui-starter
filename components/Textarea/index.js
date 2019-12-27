// @flow
import React, { useState, useCallback } from 'react';
// $flow: TextareaAutosize exist in @material-ui/core package
import { Grid, TextareaAutosize } from '@material-ui/core';
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
    fontFamily: 'Montserrat',
    '&::placeholder': {
      fontWeight: '500',
      fontSize: '14px',
      letterSpacing: 0,
      color: '#455A64',
    },
  },
  placeholder: {
    transition: 'all 0.5s ease',
    position: 'absolute',
    top: '-22px',
    left: 15,
    background: 'white',
    padding: '0 4px',
  },
  container: { position: 'relative' },
});

type Props = {
  placeholder?: string,
  outlinePlaceholder?: boolean,
  value?: string,
  onChange: (string) => void,
}

export default function Textarea(props: Props) {
  const {
    placeholder, onChange, value, outlinePlaceholder, 
  } = props;
  const classes = useStyles();
  const [areaValue, setValue] = useState(value);

  const handleChange = useCallback(({ target }) => {
    setValue(target.value);
    onChange(target.value);
  }, [setValue]);

  return (
    <Grid className={classes.container}>
      { areaValue && outlinePlaceholder && <p className={classes.placeholder}>{placeholder}</p>}
      <TextareaAutosize
        value={areaValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={classes.root}
      />
    </Grid>
  );
}

Textarea.defaultProps = {
  placeholder: '',
  outlinePlaceholder: false,
  value: '',
};
