// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '@material-ui/core/Box';

import MicroEdit from './index';

storiesOf('Atoms/MicroEdit', module)
  .add('default', () => (
    <Box m={3}>
      <MicroEdit value={3000} close={action('close')} update={action('update')} />
    </Box>
  ));
