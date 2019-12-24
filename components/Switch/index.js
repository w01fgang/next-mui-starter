import { withStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

const AntSwitch = withStyles({
  root: {
    width: 34,
    height: 18,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: '3px 4px 4px',
    color: '#455A64',
    '&$checked': {
      transform: 'translateX(12px)',
      color: '#455A64',
      '& + $track': {
        opacity: 1,
        backgroundColor: 'white',
        borderColor: '#455A64',
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: '1px solid #455A64',
    borderRadius: 20,
    opacity: 1,
    backgroundColor: 'white',
  },
  checked: {},
})(Switch);

export default AntSwitch;
