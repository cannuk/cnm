import './index.css';

import React from 'react';
import { render } from 'react-dom';

import App from './App';
import AppIE from './AppIE';
if (document.location.hash == '#IE') {
  render(<AppIE />, document.querySelector('#app'));
} else {
  render(<App />, document.querySelector('#app'));
}
