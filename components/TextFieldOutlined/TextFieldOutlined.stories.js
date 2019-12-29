import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { InputAdornment } from '@material-ui/core';
import CompanyNameIcon from '@material-ui/icons/PeopleAlt';

import TextFieldOutlined from './index';

storiesOf('Outlined TextField', module)
  .add('Default', () => (
    <TextFieldOutlined
      label={text('Label', 'Company name')}
      placeholder={text('Placeholder', 'Enter text')}
      onChange={action('onChange')}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CompanyNameIcon />
          </InputAdornment>
        ),
      }}
    />
  ));
