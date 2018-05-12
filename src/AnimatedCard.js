import React, { Component } from 'react';
import './style/AnimatedCard.sass';

export default class AnimatedCard extends React.Component {
  render() {
    const { position, digit, animation } = this.props;
    return (
      <div className={`flipCard ${position} ${animation}`}>
        <span>{digit}</span>
      </div>
    );
  }
}
