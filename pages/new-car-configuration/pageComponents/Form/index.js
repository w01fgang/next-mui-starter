// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import VehicleInformation from '../VehicleInformation';

import TubContainer from '../../../../components/TubContainer';
import Button from '../../../../components/TestButton';
import Car from '../../../../assets/svg/carIcon.svg';
import ImagePickerIcon from '../../../../assets/svg/imagePickerIcon.svg';
import WarninigIconWithPlus from '../../../../assets/svg/warninigIconWithPlus.svg';


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
    title: 'Vehicle information',
    component: VehicleInformation,
    icon: Car,
  },
  {
    title: 'Upload photos',
    component: () => <p>photos</p>,
    icon: ImagePickerIcon,
  },
  {
    title: 'Add damages',
    component: () => <p>Damages</p>,
    icon: WarninigIconWithPlus,
  },
];

function Form() {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <TubContainer data={tabs} />
      <div className={classes.buttonContainer}>
        <Button className={classes.button} title="Add Vehicle" style={{ marginRight: '16px' }} />
        <Button className={classes.button} title="Cancel" style={{ background: 'white', color: '#455A64' }} />
      </div>
    </div>
  );
}

export default Form;
