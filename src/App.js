import './style/App.sass';
import FlipClock from './FlipClock.js';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="cnm">
        <h1 className="header">Days with cnm</h1>
        <FlipClock countDate={[2017, 10, 20]} />
      </div>
    );
  }
}

export default App;
