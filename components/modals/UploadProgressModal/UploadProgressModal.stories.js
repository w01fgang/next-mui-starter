import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import UploadProgressModal from './index';

storiesOf('modals/Upload progress modal', module)
  .add('Default', () => (
    <UploadProgressModal
      progress={number('Progress', 75)}
      isOpen
      onConfirm={action('onConfirm')}
      onCancel={action('onCancel')}
      uploadsCount={number('Uploads count', 6)}
      uploadSize={number('Upload size', 3)}
      uploadedSize={number('Uploaded size', 1.5)}
    />
  )).add('Completed', () => (
    <UploadProgressModal
      progress={number('Progress', 100)}
      isOpen
      onConfirm={action('onConfirm')}
      onCancel={action('onCancel')}
      uploadsCount={number('Uploads count', 6)}
      uploadSize={number('Upload size', 3)}
      uploadedSize={number('Uploaded size', 1.5)}
    />
  ));
