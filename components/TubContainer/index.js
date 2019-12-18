// @flow
import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
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
});

type TabProps = {
  title: string,
  isActive: boolean,
  icon: React$Component,
  onChange: void,
  index: number
};

type TabContainerProps = {
  data: []
};

function Tab(props: TabProps) {
  const {
    title, isActive, icon: Icon, onChange, index,
  } = props;
  const styleProps = { borderBottom: isActive ? '2px solid #1E88E5' : '' };
  const classes = useStyles(styleProps);


  return (
    <Grid className={classes.tabContainer} onClick={() => onChange(index)}>
      { Icon && <Icon style={{ marginRight: '14px' }} /> }
      <Typography color={isActive ? 'primary' : 'inherit'}>{title}</Typography>
    </Grid>
  );
}

function TubContainer(props: TabContainerProps) {
  const [activeTab, setActiveTab] = useState(0);
  const { data } = props;
  const Component = data[activeTab].component;
  return (
    <div>
      <div className="tub-container" style={{ display: 'flex', borderBottom: '#F2F0F0 1px solid' }}>
        {
          data.map((item, i) => (
            <Tab
              onChange={setActiveTab}
              key={item.title}
              index={i}
              isActive={activeTab === i}
              icon={item.icon}
              title={item.title}
            />
          ))
        }
      </div>
      <div className="tub-content">
        <Component />
      </div>
    </div>
  );
}

export default TubContainer;
