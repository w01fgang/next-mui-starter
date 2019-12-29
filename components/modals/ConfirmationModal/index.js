// @flow
import React, { memo } from 'react';
import {
  useMediaQuery,
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { FormattedMessage, type MessageDescriptor } from 'react-intl';

import messages from './messages';
import Button from '../../Button';

/* eslint-disable react/require-default-props */
type Props = {
  onCancel?: () => void,
  onConfirm?: () => void,
  isOpen?: boolean,
  title?: string | MessageDescriptor,
  subtitle?: string | MessageDescriptor,
  confirmButtonTitle?: string | MessageDescriptor,
  cancelButtonTitle?: string | MessageDescriptor,
  isFullScreen?: boolean,
}

const getMessage = (message: string | MessageDescriptor) => (typeof message === 'string'
  ? message
  : <FormattedMessage {...message} />);

const Dialog = withStyles({
  paper: {
    padding: '24px 28px',
    minWidth: 394,
    boxSizing: 'border-box',
    textAlign: 'center',
  },
})(MuiDialog);

const DialogTitle = withStyles({
  root: {
    '& .MuiTypography-root': {
      fontSize: 24,
      fontWeight: 800,
      textTransform: 'uppercase',
    },
  },
})(MuiDialogTitle);

const SubTitle = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
}))(Typography);

const Index = memo<Props>(({
  onConfirm,
  onCancel,
  isOpen = false,
  title = messages.title,
  subtitle = '',
  cancelButtonTitle = messages.cancelButton,
  confirmButtonTitle = messages.confirmButton,
  ...props
}: Props = {}) => {
  const isFullScreen = props.isFullScreen || useMediaQuery((theme) => theme.breakpoints.down('xs'));

  return (
    <Dialog fullScreen={isFullScreen} open={isOpen}>
      <DialogTitle>
        {getMessage(title)}
      </DialogTitle>
      <SubTitle>
        {getMessage(subtitle)}
      </SubTitle>
      <DialogContent />
      <DialogActions>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Button variant="contained" onClick={onCancel} fullWidth size="large">
              {getMessage(cancelButtonTitle)}
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button variant="contained" onClick={onConfirm} color="primary" fullWidth size="large">
              {getMessage(confirmButtonTitle)}
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
});

export default Index;
