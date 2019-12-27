// @flow
import React, { useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import Modal from './ensuranceModal';

import messages from './messages';

const PageTitle = withStyles({ root: { fontWeight: 500, fontSize: 14, padding: 25 } })(Box);

const RowContainer = withStyles({ root: { minHeight: 80, borderBottom: '#EFEFEF 1px solid' } })(Grid);

const PensilIcon = withStyles({
  root: {
    color: '#1E88E5',
    fontSize: 25,
    background: '#EEF4F8',
    borderRadius: '50%',
    padding: 4,
  },
})(CreateIcon);

const InfoRow = withStyles({
  title: { fontWeight: 'bold', fontSize: 12, color: '#455A64' },
  description: { fontWeight: 500, fontSize: 10, color: '#455A64' },
})(({ title, description, classes }) => (
  <Box>
    <Box className={classes.title}>{title}</Box>
    <Box className={classes.description}>{description}</Box>
  </Box>
));

const Price = withStyles({ root: { fontWeight: 'bold', fontSize: 14, color: '#455A64' } })(Box);

const useStyles = makeStyles({
  finance: {
    fontSize: 10,
  },
});

const data = [
  {
    title: 'Basic Ensurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    franchise: '0',
    price: '0',
    id: 0,
  },
  {
    title: 'Medium Ensurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    franchise: '0',
    price: '0',
    id: 1,
  },
  {
    title: 'Full Ensurance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    franchise: '0',
    price: '0',
    id: 2,
  },
];

function EnsuranceTypes() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState(data);
  const [editedRow, setEditedRow] = useState(rows[0]);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [setModalOpen]);

  const rowEditHandler = useCallback((index) => {
    setEditedRow(data[index]);
    setModalOpen(true);
  }, []);

  const handleSubmit = useCallback((values) => {
    setModalOpen(false);
    setRows([
      values,
      ...rows.filter((item) => item.id !== values.id),
    ]);
  });

  const removeRow = useCallback((id) => {
    console.log(rows.filter((item) => item.id !== id), rows);
    setRows([
      ...rows.filter((item) => item.id !== id),
    ]);
  }, []);

  return (
    <Box>
      <PageTitle><FormattedMessage {...messages.title} /></PageTitle>
      {
        rows.map((item, index) => (
          <RowContainer container alignItems="center" key={item.id}>
            <Grid item sm={1} container justify="center" onClick={() => removeRow(item.id)}><DeleteOutlineIcon /></Grid>
            <Grid item sm={8}>
              <InfoRow
                title={item.title}
                description={item.description}
              />
            </Grid>
            <Grid item sm={1}>
              <Price>{`${item.franchise} €`}</Price>
              <Box className={classes.finance}>Franchise</Box>
            </Grid>
            <Grid item sm={1}>
              <Price>{`+ ${item.price} €`}</Price>
              <Box className={classes.finance}>Per Day</Box>
            </Grid>
            <Grid item sm={1} container justify="center" onClick={() => rowEditHandler(index)}><PensilIcon /></Grid>
          </RowContainer>
        ))
      }
      <Modal
        open={modalOpen}
        handleClose={toggleModal}
        onSubmit={handleSubmit}
        {...editedRow}
      />
    </Box>
  );
}

export default EnsuranceTypes;
