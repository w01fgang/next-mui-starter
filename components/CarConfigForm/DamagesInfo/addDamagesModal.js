// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';

import Select from '../../Select';
import Modal from '../../Modal';
import Textarea from '../../Textarea';
import FileInput from '../../FileInput';
import Button from '../../TestButton';
import CarImageContainer from '../ImageUploader/carSelector';

import TrashIcon from '../../../assets/svg/trashIcon.svg';

export const damagesOptions = [
  { title: 'Add Custom Damage', comp: () => <p style={{ fontWeight: 'bold', color: '#1E88E5' }}>Add Custom Damage</p>, value: 'new' },
  { title: 'Scratch', comp: () => <p>Scratch</p>, value: 'Scratch' },
  { title: 'Dent', comp: () => <p>Dent</p>, value: 'Dent' },
  { title: 'Clack', comp: () => <p>Clack</p>, value: 'Clack' },
  { title: 'Clip', comp: () => <p>Clip</p>, value: 'Clip' },
];

export const damagesDegreeOptions = [
  { title: 'Low', comp: () => <p>Low</p>, value: 'Low' },
  { title: 'High', comp: () => <p>High</p>, value: 'High' },
];

const styles = {
  textarea: {
    marginTop: 25,
  },
  photoContainer: {
    marginTop: 20,
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
};

type Props = {
  open: boolean,
  handleClose: Function,
  onSubmit: Function,
  clickPosition: {
    x: number,
    y: number,
  },
  classes: {
    imageButtons: {},
    photoContainer: {},
    removeButton: {},
    textarea: {},
  },
}

type State = {
  selectedImages: Array<{
    size: number,
  }>,
  damageType: string,
  damageDegree: string,
  damageDescription: string,
}

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

  selectImage = ({ files }) => {
    if (files) {
      const images = Array.from(files);
      this.setState({ selectedImages: images });
    }
  };

  handleSubmit = () => {
    const { onSubmit, clickPosition } = this.props;
    const { damageDescription, damageDegree, damageType } = this.state;
    onSubmit({
      damageDescription, damageDegree, damageType, position: { ...clickPosition },
    });
  };

  render() {
    const { open, handleClose, classes } = this.props;
    const { selectedImages } = this.state;
    return (
      <div>
        <Modal
          title="Add damage"
          open={open}
          handleClose={handleClose}
        >
          <Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <Select
                  onChange={(type) => this.setState({ damageType: type.value })}
                  placeholder="Damage type"
                  options={damagesOptions}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Select
                  onChange={(type) => this.setState({ damageDegree: type.value })}
                  placeholder="Degree"
                  options={damagesDegreeOptions}
                />
              </Grid>
            </Grid>
            <Box className={classes.textarea}>
              <Textarea
                onChange={(type) => this.setState({ damageDescription: type })}
              />
            </Box>
          </Grid>
          <Grid container spacing={2} className={classes.photoContainer}>
            {
              selectedImages.map((item) => (
                <Grid item xs={12} key={item.size} sm={6} style={{ height: '150px' }}>
                  <CarImageContainer
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
                title="Upload Photos"
                handleChange={this.selectImage}
              />
            </Grid>
            {
              selectedImages.length !== 0 && (
                <Grid item xs={12} sm={6}>
                  <Box className={classes.removeButton} onClick={() => this.setState({ selectedImages: [] })}>
                    <TrashIcon />
                    Remove all
                  </Box>
                </Grid>
              )
            }
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                disabled={false}
                onClick={this.handleSubmit}
                title="Add Damage"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                disabled={false}
                onClick={handleClose}
                title="Cancel"
                style={{ background: 'white', color: '#455A64', width: '100%' }}
              />
            </Grid>
          </Grid>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(AddDamages);
