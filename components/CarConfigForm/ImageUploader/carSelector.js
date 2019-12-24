// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { Circle } from 'rc-progress';
import clsx from 'clsx';

import carFrontView from '../../../assets/svg/carFrontView.svg';
import carProfileView from '../../../assets/svg/carProfileView.svg';
import carSemiFrontView from '../../../assets/svg/carSemiFrontView.svg';

const carViews = [carSemiFrontView, carProfileView, carFrontView];

const styles = {
  emptyPhoto: {
    padding: '0 15px',
    width: '100%',
    minHeight: 160,
    maxHeight: 220,
    height: '100%',
    borderRadius: '8px',
    border: '1px solid #EEF4F8',
  },
  progressPhoto: {
    padding: '0 15px',
    minHeight: 160,
    maxHeight: 220,
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    boxShadow: '0px 5px 15px rgba(63, 63, 68, 0.1)',
  },
  completeContainer: {
    padding: 0,
  },
  loaderContainer: {
    marginTop: 45,
    width: 60,
    position: 'relative',
  },
  loadPercent: {
    position: 'absolute',
    top: '30px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '14px',
    color: '#1E88E5',
    fontWeight: 'bold',
  },
  fileSize: {
    marginTop: 10,
    color: '#1E88E5',
    fontWeight: 'bold',
    fontSize: 10,
  },
  infoSection: { padding: '0 15px' },
  removeButton: {
    color: '#1E88E5',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  cancelLoading: {
    color: '#1E88E5',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  image: { width: '100%', height: '80%' },
  loadingButtons: { marginTop: '35px' },
};

type Props = {
  classes: {
    container: {},
    emptyPhoto: {},
    progressPhoto: {},
    fileSize: {},
    loaderContainer: {},
    cancelLoading: {},
    loadingButtons: {},
    image: {},
    infoSection: {},
    loadPercent: {},
    completeContainer: {},
    removeButton: {},
  },
  onRemoveCurrentImage: Function,
  file: {
    size: number,
    name: string
  },
  index: number
};

type State = {
  loadPercent: number,
  uploadStatus: string,
  resultImage: string,
  fileName: string,
}

class CarSelector extends Component<Props, State> {
  state = {
    loadPercent: 0,
    uploadStatus: 'default',
    fileName: '',
    resultImage: '',
  };

  componentDidMount() {
    if (this.props.file) {
      this.readFile(this.props.file);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      (!prevProps.file && this.props.file)
      || (prevProps.file && this.props.file
      && prevProps.file.name !== this.props.file.name)
    ) {
      this.readFile(this.props.file);
    }
    if (prevProps.file && !this.props.file) {
      this.removeImage();
    }
  }

  cancelReaderHandler = () => {};

  removeImage = () => {
    const { onRemoveCurrentImage, file } = this.props;
    if (onRemoveCurrentImage) {
      onRemoveCurrentImage(file);
    } else this.setState({ uploadStatus: 'default' });
  };

  readFile = (file) => {
    const fileReader = new FileReader();
    fileReader.onload = ({ target }) => {
      // $flow: result doesn't exist in EventTarget
      this.setState({ resultImage: target.result, uploadStatus: 'done' });
    };
    fileReader.onprogress = (data) => {
      if (data.lengthComputable) {
        const progress = parseInt(((data.loaded / data.total) * 100), 10);
        this.setState({ loadPercent: progress });
      }
    };
    this.cancelReaderHandler = fileReader.abort;
    this.setState({
      fileName: file.name,
      uploadStatus: 'inProgress',
      // $flow: there are on need to convert file object
    }, () => fileReader.readAsDataURL(file));
  };

  renderDefaultState() {
    const { classes, index } = this.props;
    const CarView = carViews[index];
    return (
      <Grid
        alignItems="center"
        justify="center"
        container
        className={classes.emptyPhoto}
      >
        <CarView />
      </Grid>
    );
  }

  renderCompletedState = () => {
    const { classes } = this.props;
    return (
      <Box className={clsx(classes.progressPhoto, classes.completeContainer)}>
        <img className={classes.image} src={this.state.resultImage} alt="" />
        <Grid container alignItems="center" justify="space-between" className={classes.infoSection}>
          <Box>{this.state.fileName}</Box>
          <Box
            className={classes.removeButton}
            onClick={this.removeImage}
          >
            Remove
          </Box>
        </Grid>
      </Box>
    );
  };

  renderLoadingState = () => {
    const { classes, file } = this.props;
    const { loadPercent, fileName } = this.state;
    const currentFileSize = Math.floor((5 * 10) / 100);
    const fileSize = Math.floor(file ? file.size / 1000000 : 0);
    return (
      <Grid
        alignItems="center"
        container
        direction="column"
        className={classes.progressPhoto}
      >
        <Box className={classes.loaderContainer}>
          <span className={classes.loadPercent}>
            {loadPercent}
            %
          </span>
          <Circle percent={loadPercent} strokeWidth="4" strokeColor="#1E88E5" />
        </Box>
        <Box className={classes.fileSize}>{`${currentFileSize} / ${fileSize} mb`}</Box>
        <Grid container alignItems="center" justify="space-between" className={classes.loadingButtons}>
          <Box>{fileName}</Box>
          <Box className={classes.cancelLoading} onClick={this.cancelReaderHandler}>cancel</Box>
        </Grid>
      </Grid>
    );
  };

  render() {
    switch (this.state.uploadStatus) {
      case 'default':
        return this.renderDefaultState();
      case 'inProgress':
        return this.renderLoadingState();
      case 'done':
        return this.renderCompletedState();
      default:
        return this.renderDefaultState();
    }
  }
}

export default withStyles(styles)(CarSelector);
