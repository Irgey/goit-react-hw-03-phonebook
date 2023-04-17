import { ContactElement } from 'components';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClickDeleteBtn }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactElement
          name={name}
          number={number}
          key={id}
          id={id}
          onClickDeleteBtn={onClickDeleteBtn}
        />
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  onClickDeleteBtn: PropTypes.func,
};
