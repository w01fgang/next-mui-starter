// @flow
import React, { memo, useCallback } from 'react';
import { FormattedNumber } from 'react-intl';
import cx from 'clsx';

import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CreateIcon from '@material-ui/icons/Create';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindToggle, bindPopover } from 'material-ui-popup-state';

import MicroEdit from '../MicroEdit';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'flexStart',
    height: '6.25rem',
    borderBottom: '1px solid #EEF4F8',
    '&.isExtraSmall': {
      height: '5rem',
    },
    '&.left': {
      paddingRight: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
    '&.right': {
      paddingLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
    '&.highlight': {
      backgroundColor: '#EEFFF6',
      '&.left': {
        marginLeft: 0,
        paddingLeft: theme.spacing(3),
      },
      '&.right': {
        marginRight: 0,
        paddingRight: theme.spacing(3),
      },
    },
    '&.longBorder': {
      '&.left': {
        marginLeft: 0,
        paddingLeft: theme.spacing(3),
      },
      '&.right': {
        marginRight: 0,
        paddingRight: theme.spacing(3),
      },
    },
  },
  title: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: theme.spacing(1),
    '&.highlight': {
      textTransform: 'uppercase',
      fontSize: '1.16rem',
    },
    '&.isExtraSmall': {
      marginBottom: 0,
    },
  },
  subtitle: {
    fontWeight: 500,
    fontSize: '0.833rem',
    lineHeight: '1rem',
  },
  value: {
    fontWeight: 'bold',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const useButtonStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#F2F9FF',
    padding: 6,
  },
}));

type Props = {|
  +position: "left" | "right",
  +name: string,
  +title: React$Node,
  +subtitle: React$Node,
  +value: number,
  +highlight?: boolean,
  +longBorder?: boolean,
  +type: "decimal" | "currency" | "percent",
  +precise?: number,
  +onChange: (name: string, value: number) => void,
  +editForm?: React$Node,
|};

function BillingCard(props: Props) {
  const classes = useStyles();
  const buttonClasses = useButtonStyles();
  const isExtraSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  const handleChange = useCallback((val: number) => {
    const value = props.type === 'percent' ? val / 100 : val;
    props.onChange(props.name, Math.min(value, 1));
  }, [props.name, props.onChange]);


  return (
    <div className={cx(classes.root, props.position, { highlight: props.highlight, longBorder: props.longBorder, isExtraSmall })}>
      <Box display="flex" justifyContent="center" flexDirection="column" flex="1 1 auto">
        <Typography
          variant="body1"
          className={cx(classes.title, { highlight: props.highlight, isExtraSmall })}
        >
          {props.title}
        </Typography>
        {!isExtraSmall && (
          <Typography
            variant="body2"
            className={classes.subtitle}
          >
            {props.subtitle}
          </Typography>
        )}
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" className={classes.value}>
          <FormattedNumber
            minimumFractionDigits={props.precise || 0}
            value={props.value}
            format="EUR"
            style={props.type}
            currencyDisplayAs="symbol"
          />
        </Typography>
        <PopupState variant="popper" popupId="demoPopper">
          {(popupState) => (
            <Box>
              <IconButton classes={buttonClasses} color="primary" {...bindToggle(popupState)}>
                <CreateIcon />
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
              >
                <Box p={1}>
                  {props.editForm ? props.editForm : (
                    <MicroEdit value={props.type === 'percent' ? props.value * 100 : props.value} close={popupState.close} update={handleChange} />
                  )}
                </Box>


              </Popover>
            </Box>
          )}
        </PopupState>
      </Box>
    </div>
  );
}

export default memo<Props>(BillingCard);
