import React from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  onNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  onBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };
  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let percentage = Math.round(
      (100 * this.state.good) / +this.countTotalFeedback()
    );
    return percentage;
  };

  onLeaveFeedback = state => {
    this.setState(prev => ({ [state]: prev[state] + 1 }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercent}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}
