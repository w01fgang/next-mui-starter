// @flow strict
import React, {
  memo,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { FormattedMessage } from 'react-intl';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import messages from './messages';

const styles = {
  input: {
    width: 100,
  },
};

type Props = {|
  +value: number,
  +close: () => void,
  +update: (value: number) => void,
|};

function MicroEdit(props: Props) {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = useCallback(() => {
    const { value } = inputRef.current || {};
    props.update(Number(value.replace(/,/, '.')));
    props.close();
  }, [inputRef]);

  return (
    <Box display="flex" alignItems="center">
      <TextField
        inputRef={inputRef}
        type="tel"
        defaultValue={props.value}
        variant="outlined"
        size="small"
        margin="none"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleChange();
          }
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">€</InputAdornment>,
          style: styles.input,
        }}
      />
      <Box ml={1}>
        <Button color="primary" onClick={handleChange}>
          <FormattedMessage {...messages.save} />
        </Button>
      </Box>
    </Box>
  );
}

export default memo<Props>(MicroEdit);
