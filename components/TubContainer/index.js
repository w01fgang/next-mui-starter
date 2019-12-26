// @flow
import React, { useState } from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FormattedMessage } from 'react-intl';

import messages from '../CarConfigForm/messages';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    display: 'flex',
    cursor: 'pointer',
    height: '64px',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '14px',
    justifyContent: 'center',
    borderRight: '#F2F0F0 1px solid',
    boxSizing: 'border-box',
    '&:last-child': {
      borderRight: 'none',
    },
    borderBottom: (props) => props.borderBottom,
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
    },
  },
  container: {
    display: 'flex',
    borderBottom: '#F2F0F0 1px solid',
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
  title: string,
  isActive: boolean,
  icon: any,
  activeIcon: any,
  onChange: (number) => void,
  index: number
};

type TabContainerProps = {
  data: Array<{
    icon: any,
    activeIcon: any,
    component: any,
    title: string,
  }>
};

function Tab(props: TabProps) {
  const {
    title, isActive, icon: Icon, onChange, index, activeIcon: ActiveIcon,
  } = props;
  const styleProps = { borderBottom: isActive ? '2px solid #1E88E5' : '' };
  const classes = useStyles(styleProps);

  return (
    <Grid item xs={3} className={classes.tabContainer} onClick={() => onChange(index)}>
      { isActive ? <ActiveIcon className={classes.icon} /> : <Icon className={classes.icon} /> }
      <Typography color={isActive ? 'primary' : 'inherit'}><FormattedMessage {...messages[title]} /></Typography>
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
      <Grid container className={classes.container}>
        {
          data.map((item, i) => (
            <Tab
              activeIcon={item.activeIcon}
              onChange={setActiveTab}
              key={item.title}
              index={i}
              isActive={activeTab === i}
              icon={item.icon}
              title={item.title}
            />
          ))
        }
      </Grid>
      <Component />
    </Box>
  );
}

export default TubContainer;
