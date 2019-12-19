// @flow
import React, { useState } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    display: 'flex',
    cursor: 'pointer',
    height: '64px',
    alignItems: 'center',
    padding: '0 25px',
    fontWeight: 'bold',
    fontSize: '14px',
    boxSizing: 'border-box',
    borderBottom: (props) => props.borderBottom,
  },
  container: {
    display: 'flex',
    borderBottom: '#F2F0F0 1px solid',
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  icon: {
    marginRight: '14px',
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

type TabProps = {
  data: {
    id: string,
    description: string,
    defaultMessage: string,
  },
  isActive: boolean,
  icon: any,
  onChange: Function,
  index: number
};

type TabContainerProps = {
  data: Array<{
    icon: any,
    component: any,
    data: {
      id: string,
      description: string,
      defaultMessage: string,
    },
  }>
};

function Tab(props: TabProps) {
  const {
    data, isActive, icon: Icon, onChange, index,
  } = props;
  const styleProps = { borderBottom: isActive ? '2px solid #1E88E5' : '' };
  const classes = useStyles(styleProps);

  return (
    <Grid className={classes.tabContainer} onClick={() => onChange(index)}>
      { Icon && <Icon className={classes.icon} /> }
      <Typography color={isActive ? 'primary' : 'inherit'}><FormattedMessage {...data} /></Typography>
    </Grid>
  );
}

function TubContainer(props: TabContainerProps) {
  const [activeTab, setActiveTab] = useState(0);
  const classes = useStyles();
  const { data } = props;
  const Component = data[activeTab].component;
  return (
    <Box>
      <Box className={classes.container}>
        {
          data.map((item, i) => (
            <Tab
              onChange={setActiveTab}
              key={item.data.id}
              index={i}
              isActive={activeTab === i}
              icon={item.icon}
              data={item.data}
            />
          ))
        }
      </Box>
      <Component />
    </Box>
  );
}

export default TubContainer;
