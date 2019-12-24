// @flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { FormattedMessage, useIntl } from 'react-intl';

import Breadcrumbs from '../../components/Breadcrumbs';
import Select from '../../components/Select';
import Form from '../../components/CarConfigForm';

const useStyles = makeStyles((theme) => ({
  pageTitle: {
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '34px',
    color: '#455A64',
    margin: '20px 0 10px',
    [theme.breakpoints.up('xs')]: {
      padding: '0 25px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0',
    },
  },
  breadcrumbsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      marginBottom: 25,
      padding: '0 25px',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginBottom: 40,
      padding: '0',
    },
  },
  select: {
    [theme.breakpoints.up('xs')]: {
      marginTop: 32,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '0',
    },
  },
}));

const breadcrumbsData = [
  {
    title: 'Home',
    href: '/',
    active: false,
  },
  {
    title: 'Add New Car',
    active: true,
    href: '',
  },
];

function CarConfiguration() {
  const { messages: intlMessages } = useIntl();
  const classes = useStyles();
  const handleSubmit = () => {};
  const handleCancel = () => {};

  return (
    <Box>
      <Box className={classes.pageTitle}>
        <FormattedMessage
          id="CarConfigurationPage.title"
          defaultMessage="Add New Car"
          description="Page title"
        />
      </Box>
      <Box className={classes.breadcrumbsContainer}>
        <Breadcrumbs data={breadcrumbsData} />
        <Box className={classes.select}>
          <Select withShadow placeholder={intlMessages['сarConfiguration.vehiclesSelect']} options={[]} />
        </Box>
      </Box>
      <Form
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </Box>
  );
}

export default CarConfiguration;
