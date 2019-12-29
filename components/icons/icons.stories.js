import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '@material-ui/core/Grid';
import {
  PDFIcon,
  CrownIcon,
  AddDocumentIcon,
  UploadIcon,
  EstiaCardIcon,
  FilterIcon,
  SearchPersonIcon,
  BadSatisfiedIcon,
  WorkAddIcon,
  DocumentsIcon,
  CompanyIcon,
  DrivingWheelIcon,
} from './index';

storiesOf('icons/Icons', module).add('Default', () => (
  <Grid container spacing={2}>
    <Grid item>
      <PDFIcon />
    </Grid>
    <Grid item>
      <CrownIcon />
    </Grid>
    <Grid item>
      <AddDocumentIcon />
    </Grid>
    <Grid item>
      <UploadIcon />
    </Grid>
    <Grid item>
      <EstiaCardIcon />
    </Grid>
    <Grid item>
      <FilterIcon />
    </Grid>
    <Grid item>
      <SearchPersonIcon />
    </Grid>
    <Grid item>
      <BadSatisfiedIcon />
    </Grid>
    <Grid item>
      <WorkAddIcon />
    </Grid>
    <Grid item>
      <DocumentsIcon />
    </Grid>
    <Grid item>
      <CompanyIcon />
    </Grid>
    <Grid item>
      <DrivingWheelIcon />
    </Grid>
  </Grid>
));
