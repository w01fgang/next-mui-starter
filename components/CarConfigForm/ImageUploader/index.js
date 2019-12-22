// @flow
import React, { Component } from 'react';
import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CarImageContainer from './carSelector';

import ImageIcon from '../../../assets/svg/imageIcon.svg';

const styles = {
  container: {
    borderBottom: '1px solid #EEF4F8',
    margin: '25px',
    paddingBottom: '25px',
  },
  photoButtonText: { display: 'flex', alignItems: 'center' },
  photoButton: {
    marginTop: '25px', background: 'white', color: '#1E88E5', border: '1px solid #A3D2FC', boxShadow: 'none',
  },
  fileInput: {
    color: 'transparent',
    width: 240,
    height: 48,
    '&::before': {
      width: 240,
      height: 48,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1E88E5',
      fontWeight: 'bold',
      fontSize: 13,
      content: "'Choose Photos'",
      background: 'white',
      border: '1px solid #A3D2FC',
      borderRadius: '3px',
      padding: '5px 8px',
      outline: 'none',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      cursor: 'pointer',
    },
    '&::-webkit-file-upload-button': {
      visibility: 'hidden',
    },
  },
};

type Props = {
  classes: {
    container: {},
    fileInput: {},
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

  selectThumbnailImage = ({ files }) => {
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
        <Grid container justify="space-between" alignItems="center" style={{ marginTop: '25px' }}>
          <Box style={{ position: 'relative', display: 'flex' }}>
            <input
              type="file"
              multiple
              className={classes.fileInput}
              onChange={(e) => this.selectThumbnailImage(e.target)}
            />
            <ImageIcon style={{ position: 'absolute', left: '50px', top: '16px' }} />
          </Box>
          { this.state.imageFile0 && <Box onClick={this.removeImages}>Remove all</Box> }
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(ImageUploader);
