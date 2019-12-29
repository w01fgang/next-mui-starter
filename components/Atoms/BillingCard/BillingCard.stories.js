// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '@material-ui/core/Box';

import BillingCard from './index';

storiesOf('Atoms/BillingCard', module)
  .add('default', () => (
    <Box>
      <Box width={848} display="flex">
        <Box>
          <BillingCard
            position="left"
            name="deposit"
            title="Deposit"
            subtitle="You can change predefined daily prices in the vehicle options or directly here"
            value={3500}
            onChange={action('onChange')}
            type="currency"
          />
        </Box>
        <Box borderLeft="1px solid #EEF4F8">
          <BillingCard
            position="right"
            name="price"
            title="Price per day"
            subtitle="You can change predefined daily prices in the vehicle options or directly here"
            value={250}
            onChange={action('onChange')}
            type="currency"
            longBorder
          />
        </Box>
      </Box>
      <Box width={424 * 2} display="flex">
        <Box>
          <BillingCard
            position="left"
            name="franchise"
            title="Franchise"
            subtitle="You can change predefined daily prices in the vehicle options or directly here"
            value={3500}
            onChange={action('onChange')}
            type="currency"
          />
        </Box>
        <Box borderLeft="1px solid #EEF4F8">
          <BillingCard
            position="right"
            name="delivery"
            title="Delivery price"
            subtitle="You can change predefined daily prices in the vehicle options or directly here"
            value={540}
            onChange={action('onChange')}
            type="currency"
            highlight
          />
        </Box>
      </Box>
    </Box>
  ));
