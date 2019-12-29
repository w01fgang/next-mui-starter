// @flow
import React from 'react';
import MuiSvgIcon from '@material-ui/core/SvgIcon';
import withStyles from '@material-ui/styles/withStyles';

const SvgIcon = withStyles({
  root: {
    height: 30,
  },
})(MuiSvgIcon);

const WorkAddIcon = (props: $FlowFixMe) => (
  <SvgIcon fill="none" viewBox=" 0 0 18 18" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.318 4a2 2 0 012-2h3a2 2 0 012 2v1.545h1.5a2 2 0 012 2V13a2 2 0 01-2 2h-10a2 2 0 01-2-2V7.545a2 2 0 012-2h1.5V4zm2.167-.818a1 1 0 00-1 1v1.364h4.667V4.182a1 1 0 00-1-1H7.485z" fill="#1E88E5" />
    <mask id="a" maskUnits="userSpaceOnUse" x="11" y="11" width="7" height="7" fill="#000">
      <path fill="#fff" d="M11 11h7v7h-7z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 12h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2z" />
    </mask>
    <path fillRule="evenodd" clipRule="evenodd" d="M15 12h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2z" fill="#1E88E5" />
    <path d="M14 12v-1h-1v1h1zm1 0h1v-1h-1v1zm-1 2v1h1v-1h-1zm-2 0v-1h-1v1h1zm0 1h-1v1h1v-1zm2 0h1v-1h-1v1zm0 2h-1v1h1v-1zm1 0v1h1v-1h-1zm0-2v-1h-1v1h1zm2 0v1h1v-1h-1zm0-1h1v-1h-1v1zm-2 0h-1v1h1v-1zm-1-1h1v-2h-1v2zm1 1v-2h-2v2h2zm-3 1h2v-2h-2v2zm1 0v-1h-2v1h2zm1-1h-2v2h2v-2zm1 3v-2h-2v2h2zm0-1h-1v2h1v-2zm-1-1v2h2v-2h-2zm3-1h-2v2h2v-2zm-1 0v1h2v-1h-2zm-1 1h2v-2h-2v2zm-1-3v2h2v-2h-2z" fill="#fff" mask="url(#a)" />
  </SvgIcon>
);

export default WorkAddIcon;
