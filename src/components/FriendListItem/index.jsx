import React from 'react';
import css from './style.module.css';

function FriendListItem({ data }) {
  return data.map(el => (
    <li className={css.item} key={el.id}>
      <span
        className={`${el.isOnline ? css.online : css.offline} ${css.status}`}
      ></span>
      <img
        className={css.avatar}
        src={el.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{el.name}</p>
    </li>
  ));
}

export default FriendListItem;
