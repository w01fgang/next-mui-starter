// @flow
import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { Breadcrumbs as MuiBreadcrumbs } from '@material-ui/core';
import Link from '../Link';

import messages from './messages';

const Container = withStyles({
  root: {
    marginTop: 8,
  },
  li: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '17px',
    cursor: 'inherit',
    '&>a': {
      textDecorationLine: 'underline',
    },
  },
})(MuiBreadcrumbs);

type Props = {|
  children: React$Node,
|};

class Breadcrumbs extends PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Container aria-label="breadcrumb">
        <Link href="/">
          <FormattedMessage {...messages.homeLink} />
        </Link>
        {children}
      </Container>
    );
  }
}

export default Breadcrumbs;
