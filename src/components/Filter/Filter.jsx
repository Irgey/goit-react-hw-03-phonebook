import PropTypes from 'prop-types';

const Filter = ({ value, onFilterElements }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onFilterElements} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onFilterElements: PropTypes.func.isRequired,
};
