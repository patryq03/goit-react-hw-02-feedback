import css from './Statistics.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className={css.statistics}>
        <h2 className={css.statistics__title}>Statistics</h2>
        <ul className={css.statistics__list}>
          {Object.entries(this.props.stat).map(([key, value]) => {
            return (
              <li className={css.statistics__item} key={nanoid()}>
                <span className={css.statistics__name} key={nanoid()}>
                  {key}:{' '}
                </span>
                <span key={nanoid()}>{value}</span>
              </li>
            );
          })}
          <li className={css.statistics__item} key={nanoid()}>
            <span key={nanoid()}>Total: </span>
            <span key={nanoid()}>{this.props.total}</span>
          </li>
          <li className={css.statistics__item} key={nanoid()}>
            <span key={nanoid()}>Positive feedback: </span>
            <span key={nanoid()}>{this.props.positivePercentage}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
