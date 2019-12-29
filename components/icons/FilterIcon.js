// @flow
import React from 'react';
import MuiSvgIcon from '@material-ui/core/SvgIcon';
import withStyles from '@material-ui/styles/withStyles';

const SvgIcon = withStyles({
  root: {
  },
})(MuiSvgIcon);

const FilterIcon = (props: $FlowFixMe) => (
  <SvgIcon fill="none" viewBox=" 0 0 19 17" {...props}>
    <path d="M11 12h2.995V9H16v3h3v2h-3v3h-2.005v-3H11v-2zm-1.338 2.067a.818.818 0 01-.234.691.84.84 0 01-1.183 0l-3.342-3.341a.824.824 0 01-.241-.692V6.458L.67 1.35A.833.833 0 01.812.183.869.869 0 011.328 0h11.667c.183 0 .358.067.517.183a.833.833 0 01.141 1.167L9.662 6.458v7.609zm-6.634-12.4l3.3 4.225v4.591l1.667 1.667V5.875l3.3-4.208H3.028z" />
  </SvgIcon>
);

export default FilterIcon;
