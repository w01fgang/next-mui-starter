// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { injectIntl, type IntlShape, FormattedMessage } from 'react-intl';

import messages from './messages';
import { isMobileDevice } from '../../../scripts/helpers/global';

import Select from '../../Select';
import Modal from '../../Modal';
import Textarea from '../../Textarea';
import FileInput from '../../FileInput';
import Button from '../../TestButton';
import CarImageContainer from '../ImageUploader/carSelector';

import TrashIcon from '../../../assets/svg/trashIcon.svg';

const styles = {
  textarea: {
    marginTop: 25,
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
    minHeight: 150,
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
  exterior: boolean,
  handleClose: () => void,
  onSubmit: Function,
  clickPosition: {
    x: number,
    y: number,
  },
  classes: { [key: $Keys<typeof styles>]: string },
  editedDamage: {
    damageType: string,
    damageDegree: string,
    damageDescription: string,
    exterior: boolean,
    position: {
      x: number,
      y: number,
    },
  }
}

type State = {
  selectedImages: Array<{
    size: number,
    lastModified: number,
  }>,
  damageType: string,
  damageDegree: string,
  damageDescription: string,
}

const AddSelectorOption = withStyles({
  container: { fontWeight: 'bold', color: '#1E88E5' },
})(({ title, classes }) => <p className={classes.container}>{title}</p>);

class AddDamages extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedImages: [],
      damageType: '',
      damageDegree: '',
      damageDescription: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (Object.keys(this.props.editedDamage).length > 0 && Object.keys(prevProps.editedDamage).length === 0) {
      this.setValues();
    }
  }

  setValues = () => {
    this.setState({
      damageType: this.props.editedDamage.damageType,
      damageDegree: this.props.editedDamage.damageDegree,
      damageDescription: this.props.editedDamage.damageDescription,
    });
  };

  selectImage = ({ target: { files } }) => {
    if (files) {
      const images = Array.from(files);
      this.setState((prevState) => ({ selectedImages: [...prevState.selectedImages, ...images] }));
    }
  };

  removeImage = (image) => {
    this.setState((prevState) => ({
      selectedImages: prevState.selectedImages.filter((item) => item.lastModified !== image.lastModified),
    }));
  };

  handleSubmit = () => {
    const {
      onSubmit, clickPosition, exterior, editedDamage, 
    } = this.props;
    const { damageDescription, damageDegree, damageType } = this.state;
    const values = {
      exterior: Object.keys(editedDamage).length === 0 ? exterior : editedDamage.exterior,
      position: Object.keys(editedDamage).length === 0 ? { ...clickPosition } : { ...editedDamage.position },
    };
    onSubmit({
      damageDescription,
      damageDegree,
      damageType,
      ...values,
    });
    this.setInitial();
  };

  typeDamageHandler = ({ value }) => {
    this.setState({ damageType: value });
  };

  damageDegreeHandler = ({ value }) => {
    this.setState({ damageDegree: value });
  };

  descriptionHandler = (value) => {
    this.setState({ damageDescription: value });
  };

  removeImages = () => {
    this.setState({ selectedImages: [] });
  };

  setInitial = () => {
    this.setState({
      selectedImages: [],
      damageType: '',
      damageDegree: '',
      damageDescription: '',
    });
  };

  handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
    this.setInitial();
  };

  render() {
    const {
      open, classes, intl,
    } = this.props;
    const {
      selectedImages, damageType, damageDegree, damageDescription, 
    } = this.state;
    const damagesOptions = [
      { title: intl.formatMessage(messages.newDamage), comp: () => <AddSelectorOption title={intl.formatMessage(messages.newDamage)} />, value: 'custom' },
      { title: intl.formatMessage(messages.damageScratch), comp: () => <p>{intl.formatMessage(messages.damageScratch)}</p>, value: 'Scratch' },
      { title: intl.formatMessage(messages.damageDent), comp: () => <p>{intl.formatMessage(messages.damageDent)}</p>, value: 'Dent' },
      { title: intl.formatMessage(messages.damageClack), comp: () => <p>{intl.formatMessage(messages.damageClack)}</p>, value: 'Clack' },
      { title: intl.formatMessage(messages.damageClip), comp: () => <p>{intl.formatMessage(messages.damageClip)}</p>, value: 'Clip' },
    ];
    const damagesDegreeOptions = [
      { title: intl.formatMessage(messages.damageDegreeLow), comp: () => <p>{intl.formatMessage(messages.damageDegreeLow)}</p>, value: 'Low' },
      { title: intl.formatMessage(messages.damageDegreeHigh), comp: () => <p>{intl.formatMessage(messages.damageDegreeHigh)}</p>, value: 'High' },
    ];

    return (
      <Modal
        title={intl.formatMessage(messages.damageModalTitle)}
        open={open}
        handleClose={this.handleClose}
      >
        <Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Select
                onChange={this.typeDamageHandler}
                placeholder={intl.formatMessage(messages.typeSelect)}
                options={damagesOptions}
                value={damageType}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Select
                onChange={this.damageDegreeHandler}
                placeholder={intl.formatMessage(messages.degreeSelect)}
                options={damagesDegreeOptions}
                value={damageDegree}
              />
            </Grid>
          </Grid>
          <Box className={classes.textarea}>
            <Textarea
              value={damageDescription}
              onChange={this.descriptionHandler}
            />
          </Box>
        </Grid>
        <Grid container spacing={2} className={classes.photoContainer}>
          {
            selectedImages.map((item) => (
              <Grid item xs={12} key={item.lastModified} sm={6} className={classes.image}>
                <CarImageContainer
                  onRemoveCurrentImage={this.removeImage}
                  index={1}
                  file={item}
                />
              </Grid>
            ))
          }
        </Grid>
        <Grid container spacing={2} className={classes.imageButtons}>
          <Grid item xs={12} sm={selectedImages.length !== 0 ? 6 : 12}>
            <FileInput
              title={intl.formatMessage(messages.fileButton)}
              handleChange={this.selectImage}
            />
          </Grid>
          {
            isMobileDevice() && (
              <Grid item xs={12}>
                <FileInput
                  accept="image/*"
                  capture="camera"
                  title={intl.formatMessage(messages.makePhotos)}
                  handleChange={this.selectImage}
                />
              </Grid>
            )
          }
          {
            selectedImages.length !== 0 && (
              <Grid item xs={12} sm={6}>
                <Box className={classes.removeButton} onClick={this.removeImages}>
                  <TrashIcon />
                  <FormattedMessage {...messages.removeImages} />
                </Box>
              </Grid>
            )
          }
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              className={classes.addDamagesButton}
              disabled={false}
              onClick={this.handleSubmit}
              title={intl.formatMessage(messages.addDamagesButton)}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              disabled={false}
              onClick={this.handleClose}
              title={intl.formatMessage(messages.cancelButton)}
              className={classes.cancelButton}
            />
          </Grid>
        </Grid>
      </Modal>
    );
  }
}

export default injectIntl(withStyles(styles)(AddDamages));
