import React from 'react';
import css from './style.module.css';
const Profile = props => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={props.avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{props.username}</p>
        <p className={css.personal_information}>@{props.tag}</p>
        <p className={css.personal_information}>{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{props.stats.followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{props.stats.views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
