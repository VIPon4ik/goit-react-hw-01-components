import { FriendListItem } from 'components/friendListItem/FriendListItem';
import styles from './FriendList.module.scss';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
