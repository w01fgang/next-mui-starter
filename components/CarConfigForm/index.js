// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useIntl } from 'react-intl';

import messages from './messages';

import VehicleInformation from './VehicleInformation';
import ImageUploader from './ImageUploader';
import DamagesInfo from './DamagesInfo';

import TubContainer from '../TubContainer';
import Button from '../TestButton';
import CarIconFill from '../../assets/svg/carIconFill.svg';
import CarIcon from '../../assets/svg/carIcon.svg';
import ImagePickerIcon from '../../assets/svg/imagePickerIcon.svg';
import ImagePickerIconFill from '../../assets/svg/imagePickerIconFill.svg';
import WarninigIconWithPlus from '../../assets/svg/warninigIconWithPlus.svg';
import WarninigIconWithPlusFill from '../../assets/svg/warninigIconWithPlusFill.svg';

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
      id: 'сarConfiguration.carInfoTab',

      description: 'Tab',
      defaultMessage: 'Tab',
    },
    component: VehicleInformation,
    icon: CarIcon,
    activeIcon: CarIconFill,
  },
  {
    data: {
      id: 'сarConfiguration.carImageTab',
      description: 'Tab',
      defaultMessage: 'Tab',
    },
    component: ImageUploader,
    icon: ImagePickerIcon,
    activeIcon: ImagePickerIconFill,
  },
  {
    data: {
      id: 'сarConfiguration.carDamagesTab',
      description: 'Tab',
      defaultMessage: 'Tab',
    },
    component: DamagesInfo,
    icon: WarninigIconWithPlus,
    activeIcon: WarninigIconWithPlusFill,
  },
];

function Form() {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Box className={classes.formContainer}>
      <TubContainer data={tabs} />
      <Box className={classes.buttonContainer}>
        <Button
          disabled={false}
          onClick={() => {}}
          className={classes.button}
          title={intl.formatMessage(messages.confirmButton)}
          style={{ marginRight: '16px' }}
        />
        <Button
          disabled={false}
          onClick={() => {}}
          className={classes.button}
          title={intl.formatMessage(messages.cancelButton)}
          style={{ background: 'white', color: '#455A64' }}
        />
      </Box>
    </Box>
  );
}

export default Form;
