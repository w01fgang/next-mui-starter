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
    overflow: 'scroll',
    maxHeight: '100%',
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
}));

type Props = {
  open: boolean,
  title: string,
  handleClose: Function,
  children: any,
}

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
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box className={classes.modalContainer}>
        <Grid container justify="space-between" alignItems="center" className={classes.modalTitle}>
          {title && title}
          <CloseIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
        </Grid>
        <Grid className={classes.modalBody}>
          {children}
        </Grid>
      </Box>
    </Modal>
  );
}
