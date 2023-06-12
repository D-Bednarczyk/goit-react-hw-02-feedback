import React, { Component } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
  static defaultProps = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  handleOnClick = option => {
    switch (option) {
      case 'good':
        return this.setState({ good: this.state.good + 1 });
      case 'neutral':
        return this.setState({ neutral: this.state.neutral + 1 });
      case 'bad':
        return this.setState({ bad: this.state.bad + 1 });
      default:
        break;
    }
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
          <FeedbackOptions
            options={'Good'}
            onLeaveFeedback={() => this.handleOnClick('good')}
          ></FeedbackOptions>
          <FeedbackOptions
            options={'Neutral'}
            onLeaveFeedback={() => this.handleOnClick('neutral')}
          ></FeedbackOptions>
          <FeedbackOptions
            options={'Bad'}
            onLeaveFeedback={() => this.handleOnClick('bad')}
          ></FeedbackOptions>
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
