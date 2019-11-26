import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  success: '#30BE71',
  custom: {
    lightGrey: '#99ABB4',
    link: '#1E88E5',
    linkHover: '#4b99e5',
    facebook: '#4267B2',
    facebookHover: '#3b5998',
    google: '#FFFFFF',
    googleHover: '#F4F7F9',
    submit: '#1E88E5',
    submitHover: '#2F97F3',
  },
  primary: {
    contrastText: white,
    dark: '#2F97F3',
    main: '#1E88E5',
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue.A400,
    light: colors.blue.A400,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#455A64',
    secondary: '#99ABB4',
    link: colors.blue[600],
  },
  link: colors.blue[800],
  filledIcon: '#455a64',
  icon: '#CED4DA',
  background: {
    default: '#ecf3f7',
    paper: white,
  },
  divider: colors.grey[200],
  outlineInput: '#A3D2FC',
};
