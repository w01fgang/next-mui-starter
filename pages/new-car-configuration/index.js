// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '../../components/Breadcrumbs';
import Select from '../../components/Select';
import Form from './pageComponents/Form';

const useStyles = makeStyles({
  pageTitle: {
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '34px',
    color: '#455A64',
    margin: '20px 0 10px',
  },
  breadcrumbsContainer: {
    marginBottom: 40,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const breadcrumbsData = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Add New Car',
    active: true,
  },
];

function CarConfiguration() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.pageTitle}>Add New Car</div>
      <div className={classes.breadcrumbsContainer}>
        <Breadcrumbs data={breadcrumbsData} />

        <Select withShadow placeholder="Last added vehicles" options={[]} />
      </div>
      <Form />
    </div>
  );
}

export default CarConfiguration;
