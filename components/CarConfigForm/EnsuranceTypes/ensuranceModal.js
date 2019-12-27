// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { injectIntl, type IntlShape } from 'react-intl';

import messages from './messages';

import Modal from '../../Modal';
import Textarea from '../../Textarea';
import Button from '../../TestButton';
import Input from '../../Input';

const styles = {
  textarea: {
    marginTop: 25,
    marginBottom: 25,
  },
  photoContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  imageButtons: {
    marginTop: 20,
    marginBottom: 40,
  },
  removeButton: {
    color: '#1E88E5',
    fontWeight: 'bold',
    fontSize: 13,
    height: 48,
    width: '100%',
    border: '1px solid #A3D2FC',
    boxSizing: 'border-box',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  image: {
    height: 150,
  },
  addDamagesButton: {
    width: '100%',
  },
  cancelButton: {
    background: 'white',
    color: '#455A64',
    width: '100%',
  },
};

type Props = {
  open: boolean,
  intl: IntlShape,
  title: string,
  description: string,
  price: string,
  franchise: string,
  id: number,
  handleClose: () => void,
  onSubmit: Function,
  classes: {
    imageButtons: {},
    photoContainer: {},
    removeButton: {},
    addDamagesButton: {},
    cancelButton: {},
    image: {},
    textarea: {},
  },
}

type State = {
  name: string | void,
  description: string | void,
  price: string | void,
  franchise: string | void,
}
// todo replace this form functionality with some form library
class AddDamages extends Component<Props, State> {
  state = {
    name: undefined,
    description: undefined,
    price: undefined,
    franchise: undefined,
  };


  handleSubmit = () => {
    const { onSubmit, id, title } = this.props;
    const {
      name, description, price, franchise,
    } = this.state;
    onSubmit({
      title: name || title,
      description: description || this.props.description,
      price: price || this.props.price,
      franchise: franchise || this.props.franchise,
      id,
    });
  };

  nameHandler = (value) => {
    this.setState({ name: value });
  };

  priceHandler = (value) => {
    this.setState({ price: value });
  };

  franchiseHandler = (value) => {
    this.setState({ franchise: value });
  };

  descriptionHandler = (value) => {
    this.setState({ description: value });
  };

  handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
  };

  render() {
    const {
      open,
      classes,
      intl,
      title,
      description,
      price,
      franchise,
    } = this.props;

    return (
      <Modal
        title={intl.formatMessage(messages.modalTitle)}
        open={open}
        handleClose={this.handleClose}
      >
        <Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Input
                value={title}
                outlinePlaceholder
                onChange={this.nameHandler}
                placeholder={intl.formatMessage(messages.modalNameInput)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Input
                value={franchise}
                outlinePlaceholder
                onChange={this.franchiseHandler}
                placeholder={intl.formatMessage(messages.modalFranchiseInput)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Input
                value={price}
                outlinePlaceholder
                onChange={this.priceHandler}
                placeholder={intl.formatMessage(messages.modalPriceInput)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Box className={classes.textarea}>
          <Textarea
            value={description}
            outlinePlaceholder
            placeholder={intl.formatMessage(messages.textarea)}
            onChange={this.descriptionHandler}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              className={classes.addDamagesButton}
              disabled={false}
              onClick={this.handleSubmit}
              title="save"
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              disabled={false}
              onClick={this.handleClose}
              title="cancel"
              className={classes.cancelButton}
            />
          </Grid>
        </Grid>
      </Modal>
    );
  }
}

export default injectIntl(withStyles(styles)(AddDamages));
