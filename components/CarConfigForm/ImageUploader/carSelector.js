import React from 'react';

import carFrontView from '../../../assets/svg/carFrontView.svg';
import carProfileView from '../../../assets/svg/carProfileView.svg';
import carSemiFrontView from '../../../assets/svg/carSemiFrontView.svg';

const carViews = [carSemiFrontView, carProfileView, carFrontView];

function CarSelector({index}) {
  const [state, setState] = React.useState('default');

  const CarView = carViews[index];

  return (
    <div style={{
      width: '100%',
      height: '200px',
      border: '1px solid #EEF4F8',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <CarView />
    </div>
  );
}

export default CarSelector;
