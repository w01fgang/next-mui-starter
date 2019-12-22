// @flow
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Switch from '../../Switch';

import ExteriorBody from '../../../assets/svg/sedanBody.svg';
import InteriorBody from '../../../assets/svg/sedanInterior.svg';
import CloseIcon from '../../../assets/svg/closeIcon.svg';

type Props = {
  classes: {
    damagesSelector: {},
    damagesStateContainer: {},
    damagesInfo: {},
    damagesHeader: {},
    damagesInfoRow: {},
  },
}

type State = {
  exterior: boolean,
};

const styles = {
  damagesSelector: {
    borderRight: '1px solid #EEF4F8',
    width: '35%',
  },
  damagesInfo: {
    width: '65%',
  },
  damagesStateContainer: {
    height: 66,
    cursor: 'pointer',
    userSelect: 'none',
    background: '#FBFCFD',
    borderBottom: '1px solid #EEF4F8',
  },
  damagesHeader: {
    background: '#FBFCFD',
    borderBottom: '1px solid #EEF4F8',
    fontWeight: 'bold',
    fontSize: '10px',
    height: 66,
    color: '#99ABB4',
  },
  damagesInfoRow: {
    borderBottom: '1px solid #EEF4F8',
    fontSize: '12px',
    height: 66,
    color: '#455A64',
  },
};

class DamagesInfo extends Component<Props, State> {
  state = {
    exterior: true,
  };

  carBodyRef: any;

  renderDamagesStateContainer = () => {
    const { exterior } = this.state;
    return (
      <Grid
        component="label"
        container
        justify="center"
        alignItems="center"
        className={this.props.classes.damagesStateContainer}
      >
        <Grid
          style={{
            fontSize: '15px',
            color: exterior ? '#455A64' : '#99ABB4',
            fonWeight: exterior ? 'bold' : '500',
            marginRight: '30px',
          }}
          item
        >
          Exterior
        </Grid>
        <Grid item>
          <Switch
            checked={!exterior}
            onChange={() => this.setState((prevState) => ({ exterior: !prevState.exterior }))}
            value="checkedC"
          />
        </Grid>
        <Grid
          style={{
            fontSize: '15px',
            color: !exterior ? '#455A64' : '#99ABB4',
            fonWeight: !exterior ? 'bold' : '500',
            marginLeft: '30px',
          }}
          item
        >
          Interior
        </Grid>
      </Grid>
    );
  };

  selectDamagesHandler = (event) => {
    const rect = this.carBodyRef.firstElementChild.getBoundingClientRect();
    console.log(Math.floor(event.clientY) - rect.top, Math.floor(event.clientX - rect.left));
  };

  render() {
    const { classes } = this.props;
    const CarBody = this.state.exterior ? ExteriorBody : InteriorBody;
    return (
      <Grid container>
        <Grid className={classes.damagesSelector}>
          {this.renderDamagesStateContainer()}
          <Grid
            container
            alignItems="center"
            justify="center"
            ref={(node) => { this.carBodyRef = node; }}
            style={{
              margin: '30px 0',
            }}
          >
            <CarBody
              className="testSvg"
              onClick={this.selectDamagesHandler}
            />
          </Grid>
        </Grid>
        <Grid className={classes.damagesInfo}>
          <Grid container className={classes.damagesHeader} alignItems="center">
            <Grid item md={1} container justify="center">No</Grid>
            <Grid item md={9}>Damage name</Grid>
            <Grid item md={1}>Degree</Grid>
            <Grid item md={1} container justify="center" />
          </Grid>
          <Grid container alignItems="center" className={classes.damagesInfoRow}>
            <Grid item md={1} container justify="center">1</Grid>
            <Grid item md={9}>
              <Grid style={{ fontWeight: '500', textDecoration: 'underline', color: '#1E88E5' }}>Scratch</Grid>
              <Grid style={{ fontSize: '10px', color: '#99ABB4' }}>a mark or wound made by scratching</Grid>
            </Grid>
            <Grid item md={1}>Low</Grid>
            <Grid item md={1} container justify="center"><CloseIcon /></Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(DamagesInfo);
