// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import VehicleInformation from '../VehicleInformation';

import TubContainer from '../../../../components/TubContainer';
import Button from '../../../../components/TestButton';
import Car from '../../../../assets/svg/carIcon.svg';
import ImagePickerIcon from '../../../../assets/svg/imagePickerIcon.svg';
import WarninigIconWithPlus from '../../../../assets/svg/warninigIconWithPlus.svg';


const useStyles = makeStyles({
  buttonContainer: {
    margin: '0 0 45px 25px',
  },
  formContainer: {
    background: 'white',
    border: '1px solid #D7DFE3',
    boxSizing: 'border-box',
    boxShadow: '0px 5px 15px rgba(63, 63, 68, 0.1)',
    borderRadius: '4px',
  },
});

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
        <Button title="Add Vehicle" />
        <Button title="Cancel" style={{ background: 'white', color: '#455A64', marginLeft: '16px' }} />
      </div>
    </div>
  );
}

export default Form;
