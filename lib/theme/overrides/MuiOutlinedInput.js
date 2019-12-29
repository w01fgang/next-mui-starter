// @flow
import palette from '../palette';

export default {
  root: {
    '&$focused $notchedOutline': {
      borderColor: palette.outlineInput,
      borderWidth: 2,
    },
  },
  notchedOutline: {
    borderColor: 'rgba(0,0,0,0.15)',
  },
};
