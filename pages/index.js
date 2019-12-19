// @flow
import React, { Component } from 'react';

import NewCarConfiguration from './new-car-configuration';

type Props = {};

class Index extends Component<Props> {
  static displayName = 'Index';

  render() {
    return (
      <div>
        <NewCarConfiguration />
      </div>
    );
  }
}

export default Index;
