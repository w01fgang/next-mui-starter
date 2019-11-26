import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from '@material-ui/core';

import Button from './index';

storiesOf('Button', module)
  .add('Default', () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2}>
        <Button variant="contained" color="primary" fullWidth size="large">Button</Button>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button variant="contained" fullWidth size="large">Button</Button>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button fullWidth size="large">Button</Button>
      </Grid>
    </Grid>
  ));
