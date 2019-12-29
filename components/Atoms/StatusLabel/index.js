// @flow
import React, { useCallback, memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { FormattedMessage } from 'react-intl';
import cx from 'clsx';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import messages from './messages';

const styles = {
  root: {
    width: 100,
    flex: '0 0 100px',
    height: 21,
    background: 'transparent',
    borderRadius: 4,
  },
  text: {
    fontSize: '10px',
    fontWeight: 'bold',
  },
  reservedText: {
    color: '#FC4B6C',
  },
  requestedText: {
    color: '#E89821',
  },
  maintenanceText: {
    color: '#99ABB4',
  },
  availableText: {
    color: '#30BE71',
  },
  nearRentText: {
    color: '#FC4B6C',
  },
  reservedRoot: {
    border: 'solid 1px #FC4B6C',
  },
  requestedRoot: {
    border: 'solid 1px #E89821',
  },
  maintenanceRoot: {
    border: 'solid 1px #99ABB4',
  },
  availableRoot: {
    border: 'solid 1px #30BE71',
  },
  nearRentRoot: {
    border: 'solid 1px #FC4B6C',
  },
};


const useStyles = makeStyles(styles);

type Props = {|
  +id: string,
  +status: Status | string,
  +className?: string,
  +onClick: (id: string) => void,
|};

function StatusLabel({
  id, status, className, onClick,
}: Props) {
  const classes = useStyles();

  const handleClick = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <Button variant="outlined" size="small" type="button" className={cx(classes.root, classes[`${status}Root`], className)} onClick={handleClick}>
      <Typography variant="overline" className={cx(classes.text, classes[`${status}Text`])}>
        <FormattedMessage {...messages[status]} />
      </Typography>
    </Button>
  );
}

export default memo<Props>(StatusLabel);
