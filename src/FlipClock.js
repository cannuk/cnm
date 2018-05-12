import React, { Component } from 'react';
import FlipUnitContainer from './FlipUnitContainer.js';
import './style/FlipClock.sass';
import moment from 'moment';

export default class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.printed = false;
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  updateTime() {
    // get new date
    var now = moment(new Date()); //todays date
    var end = moment([2017, 10, 20]); // another date
    const diff = now.diff(end);
    var duration = moment.duration(diff);
    if (!this.printed) {
      console.log('duration', duration);
      console.log('diff', now.diff(end));
      this.printed = true;
    }
    // set time units
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const daysms = diff % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = diff % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = diff % (60 * 1000);
    const seconds = Math.floor(minutesms / 1000);
    // on day chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      const daysShuffle = !this.state.daysShuffle;
      this.setState({
        days,
        daysShuffle,
      });
    }
    // on hour chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle,
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle,
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle,
      });
    }
  }
  render() {
    const { days, hours, minutes, seconds, daysShuffle, hoursShuffle, minutesShuffle, secondsShuffle } = this.state;
    return (
      <div className={'flipClock'}>
        <FlipUnitContainer unit={'days'} digit={days} shuffle={daysShuffle} />
        <FlipUnitContainer unit={'hours'} digit={hours} shuffle={hoursShuffle} />
        <FlipUnitContainer unit={'minutes'} digit={minutes} shuffle={minutesShuffle} />
        <FlipUnitContainer unit={'seconds'} digit={seconds} shuffle={secondsShuffle} />
      </div>
    );
  }
}
