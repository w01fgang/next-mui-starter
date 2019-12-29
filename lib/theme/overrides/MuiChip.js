// @flow
import blueGrey from '@material-ui/core/colors/blueGrey';

export default {
  root: {
    backgroundColor: blueGrey[50],
    color: blueGrey[900],
  },
  deletable: {
    '&:focus': {
      backgroundColor: blueGrey[100],
    },
  },
};
