// @flow
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import Modal from './ensuranceModal';

import messages from './messages';

const PageTitle = withStyles({ root: { fontWeight: 500, fontSize: 14, padding: 25 } })(Box);

const RowContainer = withStyles((theme) => ({
  root: {
    minHeight: 80,
    borderBottom: '#EFEFEF 1px solid',
    [theme.breakpoints.down('xs')]: {
      padding: '15px 0',
    },
  },
}))(Grid);

const PensilIcon = withStyles({
  root: {
    color: '#1E88E5',
    fontSize: 25,
    background: '#EEF4F8',
    borderRadius: '50%',
    padding: 4,
    cursor: 'pointer',
  },
})(CreateIcon);

const InfoRow = withStyles((theme) => ({
  container: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: 10,
    },
  },
  title: { fontWeight: 'bold', fontSize: 12, color: '#455A64' },
  description: { fontWeight: 500, fontSize: 10, color: '#455A64' },
}))(({ title, description, classes }) => (
  <Box className={classes.container}>
    <Box className={classes.title}>{title}</Box>
    <Box className={classes.description}>{description}</Box>
  </Box>
));

const Container = withStyles({ root: { marginBottom: 25 } })(Box);

const Price = withStyles({ root: { fontWeight: 'bold', fontSize: 14, color: '#455A64' } })(Box);

const FranchiseContainer = withStyles({ root: { fontSize: 10 } })(Box);

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

type Props = {};

type Row = {
  title: string,
  description: string,
  price: string,
  franchise: string,
  id: number,
}

type State = {
  editedRow: {
    title: string,
    description: string,
    price: string,
    franchise: string,
    id: number,
  },
  rows: Array<Row>,
  modalOpen: boolean,
};

class EnsuranceTypes extends Component<Props, State> {
  state = {
    editedRow: data[0],
    rows: data,
    modalOpen: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modalOpen: !prevState.modalOpen,
    }));
  };

  rowEditHandler = (index: number) => {
    this.setState((prevState) => ({
      modalOpen: true,
      editedRow: prevState.rows[index],
    }));
  };

  handleSubmit = (values: Row) => {
    this.setState((prevState) => ({
      modalOpen: false,
      rows: [
        values,
        ...prevState.rows.filter((item) => item.id !== values.id),
      ],
    }));
  };

  removeRow = (id: number) => {
    console.log(this.state.rows.filter((item) => item !== id));
    this.setState((prevState) => ({
      rows: prevState.rows.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { rows, modalOpen, editedRow } = this.state;
    return (
      <Container>
        <PageTitle><FormattedMessage {...messages.title} /></PageTitle>
        {
          rows.map((item, index) => (
            <RowContainer container alignItems="center" key={item.id}>
              <Grid item xs={1} sm={1} container justify="center" onClick={() => this.removeRow(item.id)}><DeleteOutlineIcon /></Grid>
              <Grid item xs={11} sm={8}>
                <InfoRow
                  title={item.title}
                  description={item.description}
                />
              </Grid>
              <Grid xs={1} sm item />
              <Grid item xs={2} sm={1}>
                <Price>{`${item.franchise} €`}</Price>
                <FranchiseContainer>Franchise</FranchiseContainer>
              </Grid>
              <Grid item xs={2} sm={1}>
                <Price>{`+ ${item.price} €`}</Price>
                <FranchiseContainer>Per Day</FranchiseContainer>
              </Grid>
              <Grid item xs={1} container justify="center" onClick={() => this.rowEditHandler(index)}><PensilIcon /></Grid>
            </RowContainer>
          ))
        }
        <Modal
          open={modalOpen}
          handleClose={this.toggleModal}
          onSubmit={this.handleSubmit}
          // Todo fix this
          // $flow: fix that later
          {...editedRow}
        />
      </Container>
    );
  }
}

export default EnsuranceTypes;
