import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Box } from '@material-ui/core';
import { FormattedMessage, useIntl } from 'react-intl';

import Select from '../../Select';
import Input from '../../Input';
import Radio from '../../Radio';

import Suit from '../../../assets/svg/suitIcon.svg';
import PlusIcon from '../../../assets/svg/plusIcon.svg';
import MinusIcon from '../../../assets/svg/munisIcon.svg';
import QuestionIcon from '../../../assets/svg/questionIcon.svg';
import ShapeIcon from '../../../assets/svg/shapeIcon.svg';
import DepositIcon from '../../../assets/svg/depositIcon.svg';
import FinanceIcon from '../../../assets/svg/financeIcon.svg';
import EuroIcon from '../../../assets/svg/euroIcon.svg';
import EuroIconKm from '../../../assets/svg/euroIconKm.svg';
import KmIcon from '../../../assets/svg/kmIcon.svg';

import messages from './messages';

import { brandOptions, carOptions, colorOption } from './data';

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      margin: '0 50px 0 45px',
    },
  },
  newAgency: {
    borderRadius: 4,
    textTransform: 'unset',
    fontWeight: 'bold',
    fontSize: '13px',
    color: '#1E88E5',
    height: 48,
    [theme.breakpoints.up('xs')]: {
      padding: 0,
      width: 'auto',
      boxShadow: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25), 0px -1px 2px rgba(0, 0, 0, 0.1)',
    },
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
}));

function CarInfo() {
  const [selectedCarOwner, setCarOwner] = React.useState(null);
  const [parametersOpen, setParametersOpen] = useState(false);
  const intl = useIntl();
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid className={classes.grid}>
        <Grid className={classes.brandLogo}><FormattedMessage {...messages.logo} /></Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4}>
            <Select
              placeholder={intl.formatMessage(messages.brandSelect)}
              isMandatory
              options={brandOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Select
              isMandatory
              placeholder={intl.formatMessage(messages.modelSelect)}
              options={carOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Select
              isMandatory
              placeholder={intl.formatMessage(messages.bodySelect)}
              options={carOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Select
              placeholder={intl.formatMessage(messages.yearSelect)}
              isMandatory
              options={carOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Select
              icon={QuestionIcon}
              placeholder={intl.formatMessage(messages.locationSelect)}
              options={carOptions}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Input
              placeholder={intl.formatMessage(messages.plateNumberSelect)}
              icon={ShapeIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <p style={{ fontSize: '14px', margin: '25px 0 15px 0' }}><FormattedMessage {...messages.info} /></p>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Radio
              label={intl.formatMessage(messages.radioOwnCar)}
              checked={selectedCarOwner === 'own car'}
              onChange={() => setCarOwner('own car')}
              name="own car"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Radio
              label={intl.formatMessage(messages.radioCompanyCar)}
              checked={selectedCarOwner === 'company car'}
              onChange={() => setCarOwner('company car')}
              name="company car"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button className={classes.newAgency}>
              <Suit />
              <FormattedMessage {...messages.agencyButton} />
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
          <FormattedMessage {...messages.parametersButton} />
        </Button>
        <Box className={classes.line} />
      </Grid>
      {
        parametersOpen && (
          <Grid container spacing={3} style={{ marginTop: '25px' }}>
            <Grid item xs={12} sm={3}>
              <Input
                placeholder={intl.formatMessage(messages.odometerInput)}
                icon={ShapeIcon}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Select
                placeholder={intl.formatMessage(messages.colorSelect)}
                options={colorOption}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Select
                placeholder={intl.formatMessage(messages.passengersSelect)}
                options={[]}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Select
                placeholder={intl.formatMessage(messages.fuelTypeSelect)}
                options={[]}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Select
                placeholder={intl.formatMessage(messages.transmissionSelect)}
                options={[]}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Input
                placeholder={intl.formatMessage(messages.kilometresInput)}
                icon={KmIcon}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <Input
                placeholder={intl.formatMessage(messages.extraPriseInput)}
                icon={EuroIconKm}
              />
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <Input
                placeholder={intl.formatMessage(messages.priceInput)}
                icon={EuroIcon}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Input
                placeholder={intl.formatMessage(messages.financeInput)}
                icon={FinanceIcon}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Input
                placeholder={intl.formatMessage(messages.depositInput)}
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
