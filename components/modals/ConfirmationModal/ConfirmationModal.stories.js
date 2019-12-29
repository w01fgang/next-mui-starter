import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ConfirmationModal from './index';

storiesOf('modals/Confirmation modal', module)
  .add('Default', () => (
    <ConfirmationModal
      isFullScreen={boolean('Is full screen', false)}
      isOpen
      confirmButtonTitle="Remove"
      subtitle="You want to remove customer card"
      onConfirm={action('onConfirm')}
      onCancel={action('onCancel')}
    />
  ));
