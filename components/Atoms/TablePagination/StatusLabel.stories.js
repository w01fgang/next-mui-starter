import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import TablePagination from './index';

storiesOf('Atoms/TablePagination', module)
  .add('default', () => (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Paper elevation={1}>
        <TablePagination
          count={number('Count', 300)}
          rowsPerPage={number('Rows per page', 25)}
          page={number('Current page', 1)}
          handleChangePage={action('handleChangePage')}
          handleChangeRowsPerPage={action('handleChangeRowsPerPage')}
        />
      </Paper>
    </Box>
  ));
