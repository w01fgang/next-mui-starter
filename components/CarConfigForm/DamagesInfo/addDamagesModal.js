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
  }>
}

class AddDamages extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedImages: [],
    };
  }

  selectImage = ({ files }) => {
    if (files) {
      const images = Array.from(files);
      this.setState({ selectedImages: images });
    }
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
              <Grid item xs={8}>
                <Select
                  placeholder="Damage type"
                  options={[]}
                />
              </Grid>
              <Grid item xs={4}>
                <Select
                  placeholder="Degree"
                  options={[]}
                />
              </Grid>
            </Grid>
            <Box className={classes.textarea}>
              <Textarea />
            </Box>
          </Grid>
          <Grid container spacing={2} className={classes.photoContainer}>
            {
              selectedImages.map((item) => (
                <Grid item xs={6} style={{ height: '150px' }}>
                  <CarImageContainer
                    key={item.size}
                    index={1}
                    file={item}
                  />
                </Grid>
              ))
            }
          </Grid>
          <Grid container spacing={2} className={classes.imageButtons}>
            <Grid item xs={selectedImages.length !== 0 ? 6 : 12}>
              <FileInput
                title="Upload Photos"
                handleChange={this.selectImage}
              />
            </Grid>
            {
              selectedImages.length !== 0 && (
                <Grid item xs={6}>
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
                onClick={() => {}}
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
