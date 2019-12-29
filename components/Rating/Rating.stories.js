import React from 'react';
import { storiesOf } from '@storybook/react';

import Rating from './index';

storiesOf('Rating', module)
  .add('Default', () => (
    <Rating value={3} />
  ));
