import palette from '../palette';

export default {
  root: {},
  input: {
    fontWeight: 500,
    '&::placeholder': {
      opacity: 1,
      color: palette.text.secondary,
    },
  },
};
