import css from './FriendsList.module.scss';
import PropTypes from 'prop-types';
export const FriendsList = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
