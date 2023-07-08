import PropTypes from 'prop-types';

import css from './ProfileCardStyles.module.scss';

export const ProfileCard = ({ username, tag, location, avatar, stats }) => (
  <div className={css.wrapper}>
    <div className={css.profileCard}>
      <div className={css.profileImg}>
        <img src={avatar} alt="User avatar" className="avatar" />
      </div>
      <div className={css.profileCardCnt}>
        <div className={css.profileCardName}>{username}</div>
        <div className={css.profileCardText}>@{tag}</div>
        <div className={css.profileCardLoc}>
          <span className={css.profileCardLocTxt}>{location}</span>
        </div>

        <div className={css.profileCardInf}>
          <div className={css.profileCardInfItem}>
            <div className={css.profileCardInfTitle}>{stats.followers}</div>
            <div className={css.ProfileCardInfTxt}>Followers</div>
          </div>

          <div className={css.profileCardInfItem}>
            <div className={css.profileCardInfTitle}>{stats.views}</div>
            <div className={css.ProfileCardInfTxt}>views</div>
          </div>

          <div className={css.profileCardInfItem}>
            <div className={css.profileCardInfTitle}>{stats.likes}</div>
            <div className={css.ProfileCardInfTxt}>Likes</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
