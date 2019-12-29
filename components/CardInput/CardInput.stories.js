import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardInput from './index';

storiesOf('Card input', module)
  .add('Default', () => <CardInput onChange={action('onChange')} fullWidth={false} />);
