// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useIntl } from 'react-intl';

import VehicleInformation from './VehicleInformation';
import ImageUploader from './ImageUploader';

import TubContainer from '../TubContainer';
import Button from '../TestButton';
import Car from '../../assets/svg/carIcon.svg';
import ImagePickerIcon from '../../assets/svg/imagePickerIcon.svg';
import WarninigIconWithPlus from '../../assets/svg/warninigIconWithPlus.svg';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    margin: '0 25px 45px 25px',
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  formContainer: {
    background: 'white',
    border: '1px solid #D7DFE3',
    boxSizing: 'border-box',
    boxShadow: '0px 5px 15px rgba(63, 63, 68, 0.1)',
    borderRadius: '4px',
  },
  button: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      marginBottom: 25,
    },
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      width: 189,
    },
    [theme.breakpoints.up('md')]: {
      width: 240,
    },
  },
}));

const tabs = [
  {
    data: {
      id: 'сarConfiguration.carImageTab',
      description: 'Tab',
      defaultMessage: 'Tab',
    },
    component: ImageUploader,
    icon: ImagePickerIcon,
  },
  {
    data: {
      id: 'сarConfiguration.carInfoTab',
      description: 'Tab',
      defaultMessage: 'Tab',
    },
    component: VehicleInformation,
    icon: Car,
  },
  {
    data: {
      id: 'сarConfiguration.carDamagesTab',
      description: 'Tab',
      defaultMessage: 'Tab',
    },
    component: () => <p>Damages</p>,
    icon: WarninigIconWithPlus,
  },
];

function Form() {
  const classes = useStyles();
  const { messages } = useIntl();
  return (
    <Box className={classes.formContainer}>
      <TubContainer data={tabs} />
      <Box className={classes.buttonContainer}>
        <Button
          disabled={false}
          onClick={() => {}}
          className={classes.button}
          title={messages['сarConfiguration.form.confirmButton']}
          style={{ marginRight: '16px' }}
        />
        <Button
          disabled={false}
          onClick={() => {}}
          className={classes.button}
          title={messages['сarConfiguration.form.confirmButton']}
          style={{ background: 'white', color: '#455A64' }}
        />
      </Box>
    </Box>
  );
}

export default Form;
