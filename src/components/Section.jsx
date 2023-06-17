import PropTypes from 'prop-types';
import css from './Section.module.css';
export const Section = props => {
  return (
    <div>
      <h2 className={css.section}>{props.title}</h2>
    </div>
  );
};

Section.propTypes = { title: PropTypes.string.isRequired };
