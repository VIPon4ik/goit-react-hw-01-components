import styles from './FriendList.module.scss';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={styles.item} key={id}>
            <span
              className={styles.status}
              style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }}
            ></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
