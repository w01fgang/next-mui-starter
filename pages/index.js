// @flow
import React, { Component } from 'react';

import NewCarConfiguration from './newCarConfiguration';

type Props = {};

class Index extends Component<Props> {
  static displayName = 'Index';

  render() {
    return (
      <NewCarConfiguration />
    );
  }
}

export default Index;
