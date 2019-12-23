// @flow
import React, { Component } from 'react';
import { Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Switch from '../../Switch';
import AddDamagesModal from './addDamagesModal';

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
    damageIcon: {},
  },
}

type State = {
  exterior: boolean,
  modalOpen: boolean,
  damages: Array<{
    damageDescription: string,
    damageDegree: string,
    damageType: string,
    position: {
      x: number,
      y: number
    },
  }>,
  clickPosition: null | {
    x: number,
    y: number,
  }
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
  damageIcon: {
    position: 'absolute',
    fontSize: '10px',
    width: '16px',
    height: '16px',
    background: '#FC4B6C',
    border: '2px solid #FFFFFF',
    color: 'white',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class DamagesInfo extends Component<Props, State> {
  state = {
    exterior: true,
    modalOpen: false,
    damages: [],
    clickPosition: null,
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

  selectDamagesHandler = ({ clientX, clientY }) => {
    // const rect = this.carBodyRef.firstElementChild.getBoundingClientRect();
    // console.log(Math.floor(event.clientY) - rect.top, Math.floor(event.clientX - rect.left));
    this.setState({ modalOpen: true, clickPosition: { x: clientX, y: clientY } });
  };

  formHandler = (damage) => {
    this.setState((prevState) => this.setState({
      damages: [...prevState.damages, damage],
      modalOpen: false,
    }));
  };

  removeDamage(damageIndex) {
    this.setState((prevState) => this.setState({
      damages: prevState.damages.filter((item, index) => index !== damageIndex),
    }));
  }

  render() {
    const { classes } = this.props;
    const { clickPosition, modalOpen, damages } = this.state;
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
            {
              damages.map((item, index) => (
                <Box
                  style={{
                    left: item.position.x,
                    top: item.position.y,
                  }}
                  className={classes.damageIcon}
                  key={item.position.x}
                  index
                >
                  {index + 1}
                </Box>
              ))
            }
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
          {
            damages.map((item, index) => (
              <Grid key={item.position.x} container alignItems="center" className={classes.damagesInfoRow}>
                <Grid item md={1} container justify="center">{index + 1}</Grid>
                <Grid item md={9}>
                  <Grid style={{ fontWeight: '500', textDecoration: 'underline', color: '#1E88E5' }}>{item.damageType}</Grid>
                  <Grid style={{ fontSize: '10px', color: '#99ABB4' }}>{item.damageDescription}</Grid>
                </Grid>
                <Grid item md={1}>{item.damageDegree}</Grid>
                <Grid item md={1} container justify="center"><CloseIcon onClick={() => this.removeDamage(index)} /></Grid>
              </Grid>
            ))
          }
        </Grid>
        <AddDamagesModal
          clickPosition={clickPosition}
          open={modalOpen}
          onSubmit={this.formHandler}
          handleClose={() => this.setState({ modalOpen: false })}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(DamagesInfo);
