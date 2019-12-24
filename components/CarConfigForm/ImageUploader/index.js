// @flow
import React, { Component } from 'react';
import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CarImageContainer from './carSelector';
import FileInput from '../../FileInput';

const styles = (theme) => ({
  container: {
    borderBottom: '1px solid #EEF4F8',
    margin: '25px',
    paddingBottom: '25px',
  },
  photoButtonText: { display: 'flex', alignItems: 'center' },
  photoButton: {
    marginTop: '25px',
    background: 'white',
    color: '#1E88E5',
    border: '1px solid #A3D2FC',
    boxShadow: 'none',
  },
  fileInput: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: 190,
    },
    [theme.breakpoints.up('lg')]: {
      width: 240,
    },
  },
  removeButton: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '25px',
      background: 'white',
      color: '#1E88E5',
      border: '1px solid #A3D2FC',
      boxShadow: 'none',
      width: '100%',
      height: '48px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      borderRadius: '4px',
      fontWeight: 'bold',
      fontSize: '13px',
    },
  },
  buttonContainer: { marginTop: '25px' },
});

type Props = {
  classes: {
    container: {},
    fileInput: {},
    buttonContainer: {},
    image: {},
    removeButton: {},
  },
};

type State = {
  imageFile0: null,
  imageFile1: null,
  imageFile2: null,
}

class ImageUploader extends Component<Props, State> {
  state = {
    imageFile0: null,
    imageFile1: null,
    imageFile2: null,
  };

  selectThumbnailImage = ({ target: { files } }) => {
    if (files) {
      Array.from(files).map((item, index) => this.setState({ [`imageFile${index}`]: item }));
    }
  };

  removeImages = () => this.setState({
    imageFile0: null,
    imageFile1: null,
    imageFile2: null,
  });

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.container}>
        <Grid container spacing={3}>
          {
            Object.keys(this.state).map((item, index) => (
              <Grid item xs={12} sm={4} md={4} key={item}>
                <CarImageContainer
                  index={index}
                  file={this.state[`imageFile${index}`]}
                />
              </Grid>
            ))
          }
        </Grid>
        <Grid container justify="space-between" alignItems="center" className={classes.buttonContainer}>
          <Box className={classes.fileInput}>
            <FileInput
              handleChange={this.selectThumbnailImage}
            />
          </Box>
          { this.state.imageFile0 && <Box className={classes.removeButton} onClick={this.removeImages}>Remove all</Box> }
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(ImageUploader);
