// @flow
import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  style: string,
  onClick: void,
  disabled: boolean,
  title: string,
};
const buttonStyles = {
  width: '241px',
  textTransform: 'unset',
  border: 'none',
  height: '44px',
  color: 'white',
  background: '#1E88E5',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25), 0px -1px 2px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
};

// this component was written because exciting Button component unreuseble;
const TestButton = (props: Props) => {
  const {
    style, onClick, disabled, title,
  } = props;
  return (
    <Button
      style={{
        ...buttonStyles,
        ...style,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default TestButton;
