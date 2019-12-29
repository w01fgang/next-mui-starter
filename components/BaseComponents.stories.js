import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

import theme from '../lib/theme';

storiesOf('Base components/Typography', module)
  .add('h1', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Test text: 35px, font weight 500</Typography>
    </ThemeProvider>
  ))
  .add('h2', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="h2">Test text: 29px, font weight 700</Typography>
    </ThemeProvider>
  ))
  .add('h3', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="h3">Test text: 24px, font weight 500</Typography>
    </ThemeProvider>
  ))
  .add('h4', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="h4">Test text: 20px, font weight 500</Typography>
    </ThemeProvider>
  ))
  .add('h5', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="h5">Test text: 16px, font weight 500</Typography>
    </ThemeProvider>
  ))
  .add('h6', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="h6">Test text: 14px, font weight 500</Typography>
    </ThemeProvider>
  ))
  .add('subtitle1', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle1">Test text: 16px, font weight 400</Typography>
    </ThemeProvider>
  ))
  .add('subtitle2', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="subtitle2">Test text: 14px, font weight 400</Typography>
    </ThemeProvider>
  ))
  .add('body1', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="body1">Test text: 14px, font weight 400</Typography>
    </ThemeProvider>
  ))
  .add('body2', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="body2">Test text: 12px, font weight 400</Typography>
    </ThemeProvider>
  ))
  .add('caption', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="caption">Test text: 11px, font weight 400</Typography>
    </ThemeProvider>
  ))
  .add('button', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="button">Test text: 14px, font weight 500</Typography>
    </ThemeProvider>
  ))
  .add('overline', () => (
    <ThemeProvider theme={theme}>
      <Typography variant="overline">Test text: 11px, font weight 500</Typography>
    </ThemeProvider>
  ));
