// @flow

import { InputAdornment, TextField as MuiTextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import React from 'react';
import InputMask from 'react-input-mask';

type Props = {
  onChange: SyntheticInputEvent<HTMLInputElement> => void,
  value: string,
}

const TextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      letterSpacing: 1,
    },
  },
})(MuiTextField);

const CardInput = ({ onChange, value, ...props }: Props) => (
  <InputMask
    maskChar=" "
    mask="9999 9999 9999 9999"
    value={value}
    onChange={onChange}
  >
    {
      (inputProps) => (
        <TextField
          {...inputProps}
          fullWidth
          type="text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CreditCardIcon />
              </InputAdornment>
            ),
          }}
          {...props}
          variant="outlined"
        />
      )
    }

  </InputMask>
);

export default CardInput;
