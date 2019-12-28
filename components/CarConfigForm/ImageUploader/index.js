// @flow
import React, { Component } from 'react';
import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import CarImageContainer from './carSelector';
import FileInput from '../../FileInput';
import Button from '../../TestButton';

import messages from './messages';

const styles = (theme) => ({
  container: {
    borderBottom: '1px solid #EEF4F8',
    margin: '25px',
    paddingBottom: '25px',
  },
  photoButtonText: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

  },
  photoButton: {
    marginTop: '25px',
    background: 'white',
    color: '#1E88E5',
    border: '1px solid #A3D2FC',
    boxShadow: 'none',
  },
  fileInput: {
    marginTop: '25px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: 190,
      marginRight: 25,
    },
    [theme.breakpoints.up('md')]: {
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
});

type Props = {
  classes: {
    container: {},
    fileInput: {},
    buttonContainer: {},
    image: {},
    removeButton: {},
    photoButtonText: {},
  },
};

type State = {
  imageFile0: null,
  imageFile1: null,
  imageFile2: null,
};

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
          <Box className={classes.photoButtonText}>
            <Box className={classes.fileInput}>
              <FileInput
                handleChange={this.selectThumbnailImage}
              />
            </Box>
            <Button
              className={classes.fileInput}
              title="Save"
            />
          </Box>

          { this.state.imageFile0 && (
            <Box className={classes.removeButton} onClick={this.removeImages}>
              <FormattedMessage {...messages.removeButton} />
            </Box>
          )}
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(ImageUploader);
