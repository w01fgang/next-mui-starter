import React from 'react';
import { storiesOf } from '@storybook/react';

import StatusLabel from './index';

storiesOf('Atoms/StatusLabel', module)
  .add('reserved', () => (
    <StatusLabel status="reserved" />
  ))
  .add('requested', () => (
    <StatusLabel status="requested" />
  ))
  .add('maintenance', () => (
    <StatusLabel status="maintenance" />
  ))
  .add('available', () => (
    <StatusLabel status="available" />
  ))
  .add('near rent', () => (
    <StatusLabel status="nearRent" />
  ));
