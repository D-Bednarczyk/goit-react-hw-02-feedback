import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistics = props => {
  return (
    <div>
      <p className={css.good}>Good: {props.good}</p>
      <p className={css.neutral}>Neutral: {props.neutral}</p>
      <p className={css.bad}>Bad: {props.bad}</p>
      <p className={css.option}>Total: {props.total}</p>
      <p className={css.positive}>
        Positive feedback:
        {props.positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
