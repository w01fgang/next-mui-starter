// @flow
import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import MuiSvgIcon from '@material-ui/core/SvgIcon';

const SvgIcon = withStyles({
  root: {
    height: 40,
    width: 'unset',
    paddingTop: 3,
  },
})(MuiSvgIcon);

const EstiaCardIcon = (props: $FlowFixMe) => (
  <SvgIcon fill="none" viewBox=" 0 0 96 40" {...props}>
    <g filter="url(#filter0_d)">
      <path fill="url(#pattern0)" d="M10 8h76v20H10z" />
    </g>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0" transform="matrix(.00585 0 0 .02222 0 -.011)" />
      </pattern>
      <filter id="filter0_d" x="0" y="0" width="96" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix values="0 0 0 0 0.615686 0 0 0 0 0.388235 0 0 0 0 1 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <image id="image0" width="171" height="46" xlinkHref="data:image/png;base64,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" />
    </defs>
  </SvgIcon>
);

export default EstiaCardIcon;
