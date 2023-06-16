import PropTypes from 'prop-types';

export const Section = props => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

Section.propTypes = { title: PropTypes.string.isRequired };
