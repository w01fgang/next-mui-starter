// @flow

import React, { memo } from 'react';
import {
  useMediaQuery, DialogContent as MuiDialogContent, DialogActions, Dialog as MuiDialog, CircularProgress, Typography, Grid,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/styles';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';

import Button from '../../Button';
import messages from './messages';

/* eslint-disable react/require-default-props */
type Props = {
  isFullScreen?: boolean,
  uploadsCount: number,
  uploadedSize: number,
  uploadSize: number,
  progress?: number,
  isOpen?: boolean,
  onCancel?: () => void,
  onConfirm?: () => void,
}

const Dialog = withStyles({
  paper: {
    padding: '24px 28px',
    minWidth: 283,
    boxSizing: 'border-box',
    textAlign: 'center',
  },
})(MuiDialog);

const Progress = withStyles((theme) => ({
  root: {
    fontSize: 16,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    fontWeight: 800,
    color: theme.palette.primary.main,
  },
}))(Typography);

const UploadSize = withStyles((theme) => ({
  root: {
    fontSize: 12,
    color: theme.palette.text.secondary,
    fontWeight: 800,
  },
}))(Typography);

const Title = withStyles({
  root: {
    fontWeight: 800,
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  progressContainer: {
    position: 'relative',
  },
  completeProgress: {
    color: theme.palette.success.main,
  },
}));

const DialogContent = withStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
})(MuiDialogContent);

const UploadProgressModal = ({
  isOpen,
  onConfirm,
  onCancel,
  uploadsCount,
  uploadedSize = 0,
  uploadSize = 0,
  ...props
}: Props) => {
  const isFullScreen = props.isFullScreen || useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const classes = useStyles();

  const progress = Number.isInteger(props.progress) ? props.progress : (Math.ceil((uploadedSize * 100) / uploadSize) || 0);
  const isCompleted = progress === 100;
  const classNames = clsx({ [classes.completeProgress]: isCompleted });

  return (
    <Dialog fullScreen={isFullScreen} open={isOpen}>
      <DialogContent>
        <Grid container alignItems="center" justify="center" spacing={2} direction="row">
          <Grid item>
            <div className={classes.progressContainer}>
              <CircularProgress variant="static" value={progress} size={78} className={classNames} />
              <Progress className={classNames}>
                <FormattedMessage {...messages.progress} values={{ progress }} />
              </Progress>
            </div>
          </Grid>
          <Grid item>
            <Grid container alignItems="flex-start" direction="column">
              <Title>
                <FormattedMessage
                  {...isCompleted ? messages.completedTitle : messages.inProgressTitle}
                  values={{ count: uploadsCount }}
                />
              </Title>
              <UploadSize>
                <FormattedMessage
                  {...isCompleted ? messages.completedProgressSize : messages.progressSize}
                  values={{ total: uploadSize, completed: uploadedSize }}
                />
              </UploadSize>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        {
          isCompleted
            ? (
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={onConfirm}
              >
                <FormattedMessage {...messages.confirmButton} />
              </Button>
            )
            : (
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={onCancel}
              >
                <FormattedMessage {...messages.cancelButton} />
              </Button>
            )
        }
      </DialogActions>
    </Dialog>
  );
};

export default memo<Props>(UploadProgressModal);
