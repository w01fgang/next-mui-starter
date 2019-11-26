import { withStyles } from '@material-ui/core/styles';
import { Button as MUIButton } from '@material-ui/core';

const Button = withStyles({
  root: {
    textTransform: 'unset',
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    background: '#EEF4F8',
  },
})(MUIButton);

export default Button;
