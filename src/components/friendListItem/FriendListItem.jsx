import styles from './FriendListItem.module.scss';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }}
      ></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
