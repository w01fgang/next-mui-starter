// @flow
import typography from '../typography';

export default {
  root: {
    fontSize: 14,
  },
  input: {
    fontWeight: 500,
    '&::placeholder': {
      opacity: 1,
      color: typography.caption.color,
    },
  },
};
