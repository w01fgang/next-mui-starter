// @flow
import React from 'react';
import MuiSvgIcon from '@material-ui/core/SvgIcon';
import withStyles from '@material-ui/styles/withStyles';

const SvgIcon = withStyles({
  root: {
    height: 30,
  },
})(MuiSvgIcon);

const DocumentsIcon = (props: $FlowFixMe) => (
  <SvgIcon fill="none" viewBox=" 0 0 24 24" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.996.995h8l6 6v12c0 1.1-.9 2-2 2H4.986c-1.1 0-1.99-.9-1.99-2l.01-16c0-1.1.89-2 1.99-2zm.001 2v16h12v-11h-5v-5h-7z" />
    <path d="M16 4H8c-1.1 0-1.99.9-1.99 2L6 22c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V10l-6-6z" />
    <path d="M8 22V6h7v5h5v11H8z" fill="#fff" />
  </SvgIcon>
);

export default DocumentsIcon;
