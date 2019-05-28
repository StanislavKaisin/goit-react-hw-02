import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({
  user: {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  // const {
  //   name,
  //   tag,
  //   location,
  //   avatar,
  //   stats: { followers, views, likes },
  // } = user;
  // const {
  //   followers,
  //   views,
  //   likes,
  //   stats: { followers, views, likes },
  // } = stats;
  // console.log('location=', location);
  // console.log('name=', name);

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="user avatar"
          className={styles.avatar}
          width="128"
          height="128"
        />
        <p className={styles.name}> {name} </p>
        <p className={styles.tag}>{tag}</p>
        <p className="location"> {location} </p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}> Followers </span>
          <span className={styles.quantity}> {followers} </span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}> Views </span>
          <span className={styles.quantity}> {views} </span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}> Likes </span>
          <span className={styles.quantity}> {likes} </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
