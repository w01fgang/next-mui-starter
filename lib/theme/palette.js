// @flow
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import blueGrey from '@material-ui/core/colors/blueGrey';

const white = '#FFFFFF';
const black = '#000000';

const palette = {
  black,
  white,
  success: {
    main: '#30BE71',
  },
  custom: {
    lightGrey: blueGrey[300],
    link: blue[600],
    linkHover: blue[500],
    facebook: '#4267B2',
    facebookHover: '#3b5998',
    google: '#FFFFFF',
    googleHover: '#F4F7F9',
    submit: blue[600],
    submitHover: blue[500],
    red: '#D23D59',
    activeBlue: blue[600],
    noneActiveGray: '#EEF4F8',
    documentBadge: '#FFB800',
    documentBadgeShadow: '#FFF623',
    grey: '#CADBE6',
    borderColor: '#EEEEEE',
  },
  primary: {
    contrastText: white,
    dark: blue[900],
    main: blue[500],
    light: blue[300],
  },
  secondary: pink,
  error: {
    contrastText: white,
    dark: red[900],
    main: red[600],
    light: red[400],
  },
  link: blue[800],
  filledIcon: '#455a64',
  icon: '#CED4DA',
  background: {
    default: '#ecf3f7',
    lightGrey: '#FBFCFD',
    paper: white,
  },
  divider: grey[200],
  outlineInput: '#A3D2FC',
  tabs: {
    border: '#F2F0F0',
  },
};

export default palette;
