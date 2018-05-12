import React, { Component } from 'react';
import StaticCard from './StaticCard.js';
import AnimatedCard from './AnimatedCard.js';
import './style/FlipUnitContainer.sass';
export default class FlipUnitContainer extends React.Component {
  render() {
    const { digit, shuffle, unit } = this.props;

    let now = digit;
    let before = digit - 1;

    // to prevent a negative value
    if (unit !== 'hours') {
      before = before === -1 ? 59 : before;
    } else {
      before = before === -1 ? 23 : before;
    }

    // add zero
    if (now < 10) now = `0${now}`;
    if (before < 10) before = `0${before}`;

    // shuffle digits
    const digit1 = shuffle ? before : now;
    const digit2 = !shuffle ? before : now;

    // shuffle animations
    const animation1 = shuffle ? 'fold' : 'unfold';
    const animation2 = !shuffle ? 'fold' : 'unfold';

    return (
      <div className={'flipUnitContainer'}>
        <StaticCard position={'upperCard'} digit={now} />
        <StaticCard position={'lowerCard'} digit={before} />
        <AnimatedCard position={'first'} digit={digit1} animation={animation1} />
        <AnimatedCard position={'second'} digit={digit2} animation={animation2} />
        <label className="flipUnitContinerLabel">{unit || 'days'}</label>
      </div>
    );
  }
}
