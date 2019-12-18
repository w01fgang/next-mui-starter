import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';

import Select from '../../../../components/Select';
import Input from '../../../../components/Input';
import Radio from '../../../../components/Radio';

import Suit from '../../../../assets/svg/suitIcon.svg';
import PlusIcon from '../../../../assets/svg/plusIcon.svg';
import MinusIcon from '../../../../assets/svg/munisIcon.svg';
import QuestionIcon from '../../../../assets/svg/questionIcon.svg';
import ShapeIcon from '../../../../assets/svg/shapeIcon.svg';
import DepositIcon from '../../../../assets/svg/depositIcon.svg';
import FinanceIcon from '../../../../assets/svg/financeIcon.svg';
import EuroIcon from '../../../../assets/svg/euroIcon.svg';
import EuroIconKm from '../../../../assets/svg/euroIconKm.svg';
import KmIcon from '../../../../assets/svg/kmIcon.svg';

import { brandOptions, carOptions, colorOption } from './data';

const useStyles = makeStyles({
  container: {
    padding: 20,
  },
  grid: {
    display: 'flex',
  },
  brandLogo: {
    width: 120,
    height: 120,
    minWidth: 120,
    background: 'linear-gradient(135deg, #F8FCFF 11.46%, #FFFFFF 83.12%)',
    border: '1px solid #A3D2FC',
    boxSizing: 'border-box',
    boxShadow: '5px 5px 30px rgba(30, 136, 229, 0.05)',
    fontSize: 10,
    margin: '0 60px',
    lineHeight: 12,
    textTransform: 'uppercase',
    borderRadius: '50%',
    textAlign: 'center',
  },
  newAgency: {
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25), 0px -1px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    textTransform: 'unset',
    fontWeight: 'bold',
    fontSize: '13px',
    color: '#1E88E5',
    height: 48,
    width: '100%',
  },
  openButton: {
    border: '1px solid #A3D2FC',
    boxSizing: 'border-box',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#1E88E5',
    borderRadius: '4px',
    marginTop: 25,
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    background: 'white',
  },
  line: {
    background: '#EEF4F8',
    height: 1,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 44,
  },
});

function CarInfo() {
  const [selectedCarOwner, setCarOwner] = React.useState(null);
  const [parametersOpen, setParametersOpen] = useState(false);
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid className={classes.grid}>
        <Grid className={classes.brandLogo}>Brand Logo</Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Select
              placeholder="Brand"
              isMandatory
              options={brandOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              isMandatory
              placeholder="Model"
              options={carOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              isMandatory
              placeholder="Body Type"
              options={carOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              placeholder="Year of issue"
              isMandatory
              options={carOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Select
              icon={QuestionIcon}
              placeholder="Base location"
              options={carOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input
              placeholder="Plate number"
              icon={ShapeIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <p style={{ fontSize: '14px', margin: '25px 0 15px 0' }}>Here you can decide if car is your own or is agency’s car</p>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Radio
              label="It’s own Vehicle"
              checked={selectedCarOwner === 'own car'}
              onChange={() => setCarOwner('own car')}
              name="own car"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Radio
              label="It’s own Vehicle"
              checked={selectedCarOwner === 'company car'}
              onChange={() => setCarOwner('company car')}
              name="company car"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button className={classes.newAgency}>
              <Suit />
              Add new Agency
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ position: 'relative' }}
      >
        <Button
          onClick={() => setParametersOpen(!parametersOpen)}
          className={classes.openButton}
        >
          { !parametersOpen ? <PlusIcon /> : <MinusIcon /> }
          Parameters
        </Button>
        <div className={classes.line} />
      </Grid>
      {
        parametersOpen && (
          <Grid container spacing={3} style={{ marginTop: '25px' }}>
            <Grid item xs={3}>
              <Input
                placeholder="Odometer"
                icon={ShapeIcon}
              />
            </Grid>
            <Grid item xs={3}>
              <Select
                placeholder="External Color"
                options={colorOption}
              />
            </Grid>
            <Grid item xs={2}>
              <Select
                placeholder="Passengers"
                options={[]}
              />
            </Grid>
            <Grid item xs={2}>
              <Select
                placeholder="Fuel type"
                options={[]}
              />
            </Grid>
            <Grid item xs={2}>
              <Select
                placeholder="Transmission"
                options={[]}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                placeholder="Base kilometres a day"
                icon={KmIcon}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                placeholder="KM’s extra price"
                icon={EuroIconKm}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                placeholder="Base price"
                icon={EuroIcon}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                placeholder="Franchise"
                icon={FinanceIcon}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                placeholder="Deposit"
                icon={DepositIcon}
              />
            </Grid>
          </Grid>
        )
      }
    </Grid>
  );
}

export default CarInfo;
