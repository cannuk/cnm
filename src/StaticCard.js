import React, { Component } from 'react';
import './style/StaticCard.sass';
export default class StaticCard extends React.Component {
  render() {
    const { position, digit } = this.props;
    return (
      <div className={position}>
        <span>{digit}</span>
      </div>
    );
  }
}
