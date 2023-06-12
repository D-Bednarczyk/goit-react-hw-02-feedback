import React, { Component } from 'react';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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
        <Section title="Please leave feedback"></Section>
        <div>
          {['good', 'neutral', 'bad'].map((opt, index) => (
            <FeedbackOptions
              key={index}
              options={opt}
              onLeaveFeedback={() => this.handleOnClick(opt)}
            ></FeedbackOptions>
          ))}
        </div>
        <Section title="Statistics"></Section>
        {!this.countTotalFeedback() ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </div>
    );
  }
}
