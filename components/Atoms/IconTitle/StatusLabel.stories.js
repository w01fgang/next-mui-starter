import React from 'react';
import { storiesOf } from '@storybook/react';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import IconTitle from './index';

storiesOf('Atoms/IconTitle', module)
  .add('default', () => (
    <IconTitle icon={<AttachFileIcon fontSize="inherit" />}>
      Title text
    </IconTitle>
  ));
