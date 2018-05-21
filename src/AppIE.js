import './style/AppIE.sass';
import FlipClock from './FlipClock.js';
import Helmet from 'react-helmet';

import React, { Component } from 'react';

class AppIE extends Component {
  render() {
    return (
      <div>
        <h1 className="header">IE11 end of Life</h1>
        <FlipClock countDate={[2025, 0, 14]} />
        <Helmet>
          <body className="ie" />
          <title>IE end of Life</title>
        </Helmet>
      </div>
    );
  }
}

export default AppIE;
