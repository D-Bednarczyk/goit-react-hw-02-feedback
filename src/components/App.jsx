import React, { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  static defaultProps = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  handleOnClickGoodGrade = () => {
    this.setState({ good: this.state.good + 1 });
  };
  handleOnClickNeutralGrade = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  handleOnClickBadGrade = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    return (
      <div className={css.main_div}>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.handleOnClickGoodGrade}>Good</button>
          <button onClick={this.handleOnClickNeutralGrade}>Neutral</button>
          <button onClick={this.handleOnClickBadGrade}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>
            Positive feedback:
            {this.countPositiveFeedbackPercentage()}%
          </p>
        </div>
      </div>
    );
  }
}
