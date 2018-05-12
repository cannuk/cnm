import './style/App.sass';
import FlipClock from './FlipClock.js';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Days with cnm</h1>
        <FlipClock />
      </div>
    );
  }
}

export default App;
