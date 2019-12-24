// @flow
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Radio, Grid } from '@material-ui/core';

type Props = {
  onChange: () => void,
  checked: boolean,
  label: string,
  name: string,
};

const GreenRadio = withStyles({
  root: {
    color: '#CED4DA',
    '&$checked': {
      color: '#1E88E5',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    // $flow: have to be dynamic
    border: (props) => props.border,
    boxSizing: 'border-box',
    borderRadius: '4px',
    // $flow: have to be dynamic
    background: (props) => props.background,
    cursor: 'pointer',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
}));

function CustomRadio(props: Props) {
  const {
    onChange, checked, label, name,
  } = props;
  const styleProps = {
    background: checked ? '#F5FBFF' : 'white',
    border: `1px solid ${checked ? '#A3D2FC' : '#CED4DA'}`,
  };
  // $flow: need to pass object
  const classes = useStyles(styleProps);
  return (
    <Grid container className={classes.container} onClick={onChange}>
      <GreenRadio
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <p className={classes.label}>{label}</p>
    </Grid>
  );
}

export default CustomRadio;
