// @flow
import React, { useState, useCallback } from 'react';
import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { useIntl } from 'react-intl';

import Modal from '../Modal';
import Input from '../Input';
import Button from '../TestButton';
import messages from './messages';

const CancelButton = withStyles({
  button: {
    background: 'white',
    color: '#455A64',
    width: '100%',
    marginTop: 25,
  },
})(({ classes, ...rest }) => <Button className={classes.button} {...rest} />);

const SubmitButton = withStyles({
  button: { width: '100%', marginTop: 25 },
})(({ classes, ...rest }) => <Button className={classes.button} {...rest} />);

type Props = {
  open: boolean,
  onClose: () => void,
  onSubmit: (string) => void,
};

function CustomOptionModal(props: Props) {
  const intl = useIntl();
  const { open, onClose, onSubmit } = props;
  const [value, setValue] = useState('');

  const handleChange = useCallback((input) => {
    setValue(input);
  }, [setValue]);

  const handleSubmit = useCallback(() => {
    onSubmit(value);
  });

  const handleContainerClick = useCallback((event) => {
    event.stopPropagation();
  });

  return (
    <Modal
      onClick={handleContainerClick}
      open={open}
      handleClose={onClose}
      title="Add new option"
    >
      <Box>
        <Input
          onChange={handleChange}
          placeholder="Type your option"
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SubmitButton
              disabled={false}
              onClick={handleSubmit}
              title={intl.formatMessage(messages.addOptionButton)}
            />
          </Grid>
          <Grid item xs={6}>
            <CancelButton
              disabled={false}
              onClick={onClose}
              title={intl.formatMessage(messages.cancelButton)}
            />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default CustomOptionModal;
