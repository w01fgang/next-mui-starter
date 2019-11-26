import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import LuxonUtils from "@date-io/luxon";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import theme from '../../lib/theme';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      {storyFn()}
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);

export default ThemeDecorator
