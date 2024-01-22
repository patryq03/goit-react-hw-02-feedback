import css from './Feedback.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={css.feedback}>
        <h1 className={css.feedback__title}>Please leave feedback</h1>
        <div className="feedback__buttons">
          {this.props.options.map(btn => (
            <button
              className={css.feedback_buttons}
              value={btn}
              key={btn}
              type="button"
              onClick={e => this.props.onLeaveFeedback(e)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default FeedbackOptions;