// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal, Backdrop, Box, Grid,
} from '@material-ui/core';
import CloseIcon from '../../assets/svg/closeIcon.svg';

// $flow: error with colling useStyles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::focus': {
      outLine: 'none !important',
    },
    [theme.breakpoints.up('xs')]: {
      margin: 25,
    },
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    maxHeight: '100%',
    overflow: 'scroll',
    width: 670,
    background: 'white',
    borderRadius: 4,
    outline: 'none !important',
  },
  modalTitle: {
    padding: '0 30px 0 25px',
    height: 65,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#455A64',
    borderBottom: '#F2F0F0 1px solid',
  },
  modalBody: {
    padding: '25px 25px 30px',
  },
  icon: { cursor: 'pointer' },
}));

type Props = {
  open: boolean,
  title: string,
  handleClose: () => void,
  children: any,
}

const backdropProps = {
  timeout: 500,
};

export default function CustomModal(props: Props) {
  const classes = useStyles();
  const {
    open, handleClose, children, title,
  } = props;

  return (
    <Modal
      className={classes.modal}
      classes={classes.root}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={backdropProps}
    >
      <Box className={classes.modalContainer}>
        <Grid container justify="space-between" alignItems="center" className={classes.modalTitle}>
          {title && title}
          <CloseIcon className={classes.icon} onClick={handleClose} />
        </Grid>
        <Grid className={classes.modalBody}>
          {children}
        </Grid>
      </Box>
    </Modal>
  );
}
