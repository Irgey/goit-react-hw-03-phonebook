import PropTypes from 'prop-types';
import css from './ContactElement.module.css';
const ContactElement = ({ name, number, onClickDeleteBtn, id }) => {
  return (
    <li className={css.listItem}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onClickDeleteBtn(id)}>Delete</button>
    </li>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onClickDeleteBtn: PropTypes.func,
};
