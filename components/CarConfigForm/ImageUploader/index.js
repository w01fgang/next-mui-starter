// @flow
import React, { Component } from 'react';
import { Box, Grid } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import ImageIcon from '../../../assets/svg/imageIcon.svg';
import carFrontView from '../../../assets/svg/carFrontView.svg';
import carProfileView from '../../../assets/svg/carProfileView.svg';
import carSemiFrontView from '../../../assets/svg/carSemiFrontView.svg';

import Button from '../../TestButton';

const carViews = [carSemiFrontView, carProfileView, carFrontView];

class ImageUploader extends Component {
  state = {
    uploadStatus: 'default',
  };

  renderImage = (index) => {
    const CarView = carViews[index];

    switch (this.state.uploadStatus) {
      case 'default':
        return (
          <div style={{
            width: '100%',
            height: '200px',
            border: '1px solid #EEF4F8',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <CarView />
          </div>
        );
      case 'inProgress':
        return (<div style={{
          width: '100%',
          height: '200px',
          boxShadow: '0px 5px 15px rgba(63, 63, 68, 0.1)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}/>);
      case 'done':
        return (<div />);
      default:
        return (
          <div style={{
            width: '100%',
            height: '200px',
            border: '1px solid #EEF4F8',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <CarView />
          </div>
        );
    }
  };

  renderImageContainer = () => (
    <Grid container spacing={3}>
      {
          [1, 2, 3].map((item, index) => (
            <Grid item xs={12} sm={4} md={4} key={item}>
              {this.renderImage(index)}
            </Grid>
          ))
        }
    </Grid>
  );

  uploadStatusHandler = (state) => {
    this.setState({ uploadStatus: state });
  };

  render() {
    const { uploadStatus } = this.state;
    return (
      <Box style={{
        borderBottom: '1px solid #EEF4F8',
        margin: '25px',
        paddingBottom: '25px',
      }}
      >
        { this.renderImageContainer() }
        <Grid container justify="space-between" alignItems="center">
          <Button
            onClick={() => this.uploadStatusHandler('inProgress')}
            title={(
              <Box style={{ display: 'flex', alignItems: 'center' }}>
                <ImageIcon />
                <FormattedMessage id="сarConfiguration.imageUpload.choosePhotos" defaultMessage="Choose Photos" />
              </Box>
            )}
            style={{
              marginTop: '25px', background: 'white', color: '#1E88E5', border: '1px solid #A3D2FC', boxShadow: 'none',
            }}
          />
          { uploadStatus !== 'default' && <Box onClick={() => this.uploadStatusHandler('default')}>Remove all</Box> }
        </Grid>
      </Box>
    );
  }
}

export default ImageUploader;
