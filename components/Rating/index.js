// @flow strict

import { withStyles } from '@material-ui/core/styles';
import { Rating as MUIRating } from '@material-ui/lab';

const Rating = withStyles((theme) => ({
  iconFilled: {
    color: theme.palette.filledIcon,
  },
}))(MUIRating);

export default Rating;
